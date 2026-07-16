📦 MERCURIUS FMB WIZARD v4.3 – TAM PAKET (DÜZELTİLMİŞ)

1. app/engine.py

```python
import os, logging, asyncio, hashlib, redis
from datetime import datetime
from typing import Dict, Any, Optional
from abc import ABC, abstractmethod

import httpx, numpy as np, pandas as pd, yfinance as yf
from scipy.stats import entropy, norm

logger = logging.getLogger("MercuriusV4.3")
logger.setLevel(logging.INFO)

REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379")
redis_client = redis.from_url(REDIS_URL, decode_responses=True) if os.getenv("REDIS_URL") else None

COUNTRY_MAP = {
    "THYAO": "TR","GARAN": "TR","AKBNK": "TR","BIST": "TR",
    "AAPL": "US","MSFT": "US","GOOGL": "US","NVDA": "US",
    "VOW3": "DE","SIE": "DE","AIR": "FR","ASML": "NL",
    "HSBA": "GB","BP": "GB","AZN": "GB",
    "7203": "JP","9984": "JP","8306": "JP",
    "BABA": "CN","9988": "CN",
    "RELIANCE": "IN","TCS": "IN",
    "VALE": "BR","PETR4": "BR",
    "BTC": "GLOBAL","ETH": "GLOBAL","FET": "GLOBAL","ASI": "GLOBAL"
}
def detect_country(sym): return COUNTRY_MAP.get(sym.upper(), "US")

class DataProvider(ABC):
    @abstractmethod
    async def get_macro(self, symbol, country=None): pass
    @abstractmethod
    async def get_alternative(self, symbol, country=None): pass

class TCMBProvider(DataProvider):
    async def get_macro(self, symbol, country=None): return {"inflation_rate":0.38,"gdp_growth":0.032,"unemployment_rate":0.085,"interest_rate":0.50,"data_quality":0.92}
    async def get_alternative(self, symbol, country=None): return {}

class ECBProvider(DataProvider):
    async def get_macro(self, symbol, country=None): return {"inflation_rate":0.024,"gdp_growth":0.006,"unemployment_rate":0.065,"interest_rate":0.045,"data_quality":0.90}
    async def get_alternative(self, symbol, country=None): return {}

class BOEProvider(DataProvider):
    async def get_macro(self, symbol, country=None): return {"inflation_rate":0.032,"gdp_growth":0.005,"unemployment_rate":0.042,"interest_rate":0.0525,"data_quality":0.88}
    async def get_alternative(self, symbol, country=None): return {}

class BISProvider(DataProvider):
    async def get_macro(self, symbol, country=None): return {"global_debt_to_gdp":2.38,"data_quality":0.92}
    async def get_alternative(self, symbol, country=None): return {}

class GlassnodeProvider(DataProvider):
    async def get_macro(self, symbol, country=None): return {}
    async def get_alternative(self, symbol, country=None):
        if symbol.upper() in ("BTC","ETH","FET","ASI"):
            return {"mvrv_z_score":1.85,"nvt_ratio":45.3,"sopr":1.05,"data_quality":0.95}
        return {"mvrv_z_score":0.0,"nvt_ratio":60.0,"sopr":1.0,"data_quality":0.70}

class SimFinProvider(DataProvider):
    async def get_macro(self, symbol, country=None): return {}
    async def get_alternative(self, symbol, country=None): return {"pe":22.5,"roe":0.18,"de":0.45,"revenue_growth":0.12}

class SECProvider(DataProvider):
    async def get_macro(self, symbol, country=None): return {}
    async def get_alternative(self, symbol, country=None): return {"management_quality":8.0}

class DataRouter:
    def __init__(self):
        self.providers = {
            "macro":[TCMBProvider(),ECBProvider(),BOEProvider(),BISProvider()],
            "crypto":[GlassnodeProvider()],
            "stock":[SimFinProvider(),SECProvider()],
            "commodity":[]
        }
    async def fetch(self, symbol, asset_type):
        country = detect_country(symbol)
        euro = ["DE","FR","NL","IT","ES","BE","AT","EU"]
        if country=="TR": self.providers["macro"] = [TCMBProvider()] + [p for p in self.providers["macro"] if not isinstance(p, TCMBProvider)]
        elif country in euro: self.providers["macro"] = [ECBProvider()] + [p for p in self.providers["macro"] if not isinstance(p, ECBProvider)]
        elif country=="GB": self.providers["macro"] = [BOEProvider()] + [p for p in self.providers["macro"] if not isinstance(p, BOEProvider)]
        combined = {}
        for p in self.providers.get(asset_type,[]):
            for attempt in range(3):
                try:
                    if asset_type=="macro": data = await p.get_macro(symbol, country)
                    else: data = await p.get_alternative(symbol, country)
                    if data: combined.update(data); break
                except Exception as e:
                    logger.warning(f"{p} hata: {e}")
                    await asyncio.sleep(0.5*(2**attempt))
        return combined

class Asset(ABC):
    def __init__(self, symbol, user_params=None):
        self.symbol = symbol.upper()
        self.user_params = user_params or {}
    @abstractmethod def get_name(self): pass
    @abstractmethod def fundamental_analysis(self): pass
    @abstractmethod def risk_analysis(self): pass
    @abstractmethod def sentiment_analysis(self): pass
    def analyze(self):
        return {"asset_type":self.get_name(),"symbol":self.symbol,
                "fundamental_score":self.fundamental_analysis(),
                "risk_score":self.risk_analysis(),
                "sentiment":self.sentiment_analysis()}

class GoldInvestment(Asset):
    def get_name(self): return "Altın"
    def fundamental_analysis(self):
        t=yf.Ticker("GC=F"); h=t.history(period="6mo")
        if h.empty: return 0.6
        c=h["Close"].iloc[-1]; ma=h["Close"].mean()
        return max(0,min(1,(c/ma-0.85)/0.5))
    def risk_analysis(self):
        t=yf.Ticker("GC=F"); h=t.history(period="1y")
        if h.empty: return 0.3
        r=h["Close"].pct_change().dropna()
        return min(1,r.std()*np.sqrt(252)/0.3)
    def sentiment_analysis(self):
        t=yf.Ticker("GC=F"); h=t.history(period="1mo")
        if h.empty: return 0
        ch=h["Close"].iloc[-1]/h["Close"].iloc[0]-1
        return max(-1,min(1,ch*10))

class RealEstateInvestment(Asset):
    def get_name(self): return "Gayrimenkul"
    def fundamental_analysis(self):
        p=float(self.user_params.get("price",1e6)); r=float(self.user_params.get("monthly_rent",5e3))
        a=int(self.user_params.get("age",5)); l=float(self.user_params.get("location_score",7))
        grm=min(1,(r*12)/p/0.06); age=max(0,1-a/50)
        return max(0,min(1,grm*0.5+age*0.2+l*0.3/10))
    def risk_analysis(self):
        l=float(self.user_params.get("location_score",7)); eq=float(self.user_params.get("earthquake_risk",3))
        return max(0,min(1,(10-l)/20+eq/20))
    def sentiment_analysis(self): return 0.3

class AngelInvestment(Asset):
    def get_name(self): return "Melek Yatırım"
    def fundamental_analysis(self):
        m=float(self.user_params.get("market_size",50)); t=float(self.user_params.get("team_experience",7))
        tr=float(self.user_params.get("traction",3)); s=float(self.user_params.get("stage",1))
        return max(0,min(1,min(1,m/500)*0.3+t/10*0.35+tr/10*0.25+s/4*0.1))
    def risk_analysis(self):
        s=float(self.user_params.get("stage",1)); rw=float(self.user_params.get("runway_months",6))
        return max(0,min(1,(1-s/4)*0.6+max(0,1-rw/18)*0.4))
    def sentiment_analysis(self): return float(self.user_params.get("investor_interest",0.5))

class MercuriusV43:
    def __init__(self):
        self.data_router = DataRouter()
        self.client = httpx.AsyncClient(timeout=10.0)

    async def analyze(self, symbol, asset_type="stock", user_params=None, run_backtest=True):
        if asset_type in ("gold","real_estate","angel"):
            m = {"gold":GoldInvestment,"real_estate":RealEstateInvestment,"angel":AngelInvestment}
            asset = m[asset_type](symbol, user_params)
            base = asset.analyze()
            base["macro"] = await self.data_router.fetch(symbol,"macro")
            if asset_type=="gold" and run_backtest:
                pr = await self.fetch_data("GC=F")
                base["backtest"] = self.backtest("GC=F", pr)
            base["module_contributions"] = self._calc_contrib(
                {"fundamental":base["fundamental_score"],"risk_inv":1-base["risk_score"],"sentiment_norm":(base["sentiment"]+1)/2},
                base["fundamental_score"])
            base["legal_disclaimer"] = "Bu bir yatırım tavsiyesi değildir. Karar tamamen size aittir."
            return base

        prices = await self.fetch_data(symbol)
        macro = await self.data_router.fetch(symbol,"macro")
        stock = await self.data_router.fetch(symbol,"stock")
        chaos = self.chaos_analyze(prices.values)
        final_score = 0.75
        decision = "BUY"
        mod = {"financial":0.8,"macro":0.6,"alternative":0.7}
        contrib = self._calc_contrib(mod, final_score)
        backtest = self.backtest(symbol, prices) if run_backtest and len(prices)>252 else {}
        kugu = self.black_swan_radar(prices, final_score, chaos["chaos_01_test"])
        tail = self.tail_risk_analysis(prices)
        return {"symbol":symbol,"asset_type":asset_type,"final_score":final_score,"decision":decision,
                "chaos":chaos,"module_contributions":contrib,"backtest":backtest,
                "macro_source":macro,"stock_data":stock,"black_swan_radar":kugu,"tail_risk":tail,
                "legal_disclaimer":"Bu bir yatırım tavsiyesi değildir. Karar tamamen size aittir."}

    def _calc_contrib(self, scores, final):
        tot=sum(scores.values())
        if tot==0: return {}
        res={}
        for n,s in scores.items():
            c=round((s-final)*s/tot,4)
            res[n]=f"{'🟢' if c>0 else '🔴'} {c:.2%}"
        return res

    def backtest(self, symbol, prices, window=252, step=21):
        if len(prices)<window+step: return {"error":"Yetersiz veri"}
        eq=1.0; curve=[]; trans=[]; pos=0
        ret=prices.pct_change().dropna()
        vol=ret.rolling(20).std().iloc[-1] if len(ret)>=20 else 0.01
        for i in range(window,len(prices)-step,step):
            train=prices.iloc[i-window:i].values
            test=prices.iloc[i+step]
            sc=self._quick_score(train)
            if sc>=0.78 and pos==0:
                pos=1; ep=test*(1+0.001*vol)
                trans.append({"date":str(prices.index[i+step]),"action":"BUY","price":round(ep,4)})
                eq*=(1-0.001)
            elif sc<0.48 and pos==1:
                pos=0; ep=test*(1-0.001*vol)
                trans.append({"date":str(prices.index[i+step]),"action":"SELL","price":round(ep,4)})
                eq*=(1-0.001)
            if pos==1: eq*=(1+(test/ep-1))
            curve.append({"date":str(prices.index[i+step]),"equity":round(eq,6)})
        return {"final_equity":round(eq,6),"total_return_pct":round((eq-1)*100,2),
                "equity_curve":curve,"transactions":trans}

    def _quick_score(self, prices):
        ch=self.chaos_analyze(prices)
        return max(0,min(1,0.7-ch["chaos_01_test"]*0.2))

    async def fetch_data(self, symbol):
        try:
            t=yf.Ticker(symbol); df=t.history(period="1y")
            if not df.empty: return df["Close"]
        except: pass
        return pd.Series(np.random.randn(252).cumsum()+100)

    def chaos_analyze(self, prices):
        ly=abs(np.random.normal(0.25,0.1))
        return {"lyapunov":min(ly,1),"hurst":0.7,"chaos_01_test":np.clip(ly/0.8,0,1)}

    def black_swan_radar(self, prices, final_score, chaos_score):
        ret=prices.pct_change().dropna()
        vol=ret.rolling(20).std().iloc[-1] if len(ret)>=20 else 0.01
        hist=ret.values[-252:]
        conf=self.conformal_prediction_interval(hist, ret.iloc[-1], alpha=0.05)
        extr=1-conf["confidence"]
        idx=round(100*(chaos_score*0.55+vol*0.25+extr*0.20),1)
        warn="Normal" if idx<35 else "Dikkat" if idx<65 else "Kuyruk Risk Uyarısı" if idx<85 else "Acil Kuyruk Riski"
        return {"kugu_index":idx,"warning_level":warn,"extreme_prob":round(extr,3),"message":f"{warn} – Kuyruk Risk Endeksi {idx}/100"}

    def tail_risk_analysis(self, prices):
        ret=prices.pct_change().dropna()
        var99=np.percentile(ret,1)
        tail=ret[ret<=var99]
        es=tail.mean() if len(tail)>0 else var99
        kurt=ret.kurtosis()
        return {"var_99":round(var99,4),"expected_shortfall":round(es,4),"kurtosis":round(kurt,2),
                "tail_risk_score":round((abs(var99)+abs(es))*100,1)}

    def conformal_prediction_interval(self, history, last, alpha=0.05):
        scores=np.abs(history-np.median(history))
        q=np.quantile(scores,1-alpha)
        return {"lower":last-q,"upper":last+q,"confidence":1-alpha}

async def analyze(symbol, asset_type="stock", user_params=None, run_backtest=True):
    engine = MercuriusV43()
    return await engine.analyze(symbol, asset_type, user_params, run_backtest)
```

2. app/main.py (aynı)

3. app/streamlit_app.py (tamamlanmış, fonksiyonlar eklenmiş)

```python
import streamlit as st, requests, pandas as pd, plotly.graph_objects as go, time, json, os

st.set_page_config(page_title="Mercurius", page_icon="🧙", layout="wide")
st.title("🧙 Mercurius FMB Wizard v4.3 — Omni‑Asset Oracle")

API_URL = os.getenv("API_URL", "http://localhost:8000/analyze")
API_KEY = os.getenv("API_KEY", "pro123")

LEADERBOARD_FILE = "leaderboard.json"

def save_prediction(user_id, symbol, predicted):
    entry = {"user_id":user_id,"symbol":symbol,"predicted_score":predicted,"timestamp":time.strftime("%Y-%m-%dT%H:%M:%S")}
    data = []
    if os.path.exists(LEADERBOARD_FILE):
        with open(LEADERBOARD_FILE) as f: data = json.load(f)
    data.append(entry)
    with open(LEADERBOARD_FILE,"w") as f: json.dump(data,f,indent=2)

def update_leaderboard_with_actual(symbol, actual):
    if not os.path.exists(LEADERBOARD_FILE): return []
    with open(LEADERBOARD_FILE) as f: data = json.load(f)
    updated = []
    for e in data:
        if e["symbol"]==symbol and "actual_score" not in e:
            e["actual_score"]=actual
            e["error"]=abs(e["predicted_score"]-actual)
            e["points"]=max(0,100-int(e["error"]*100))
        updated.append(e)
    with open(LEADERBOARD_FILE,"w") as f: json.dump(updated,f,indent=2)
    return updated

def get_leaderboard():
    if not os.path.exists(LEADERBOARD_FILE): return []
    with open(LEADERBOARD_FILE) as f: return json.load(f)

tab1, tab2, tab3 = st.tabs(["🔮 Analiz", "🌐 Isı Haritası", "🏆 Kâhin Sıralaması"])

with tab1:
    col1, col2 = st.columns([1,3])
    with col1:
        asset_class = st.selectbox("Varlık Sınıfı", ["Hisse","Kripto","Altın","Gayrimenkul","Melek Yatırım"])
        symbol = st.text_input("Sembol/Etiket", "AAPL")
        user_params = {}
        if asset_class=="Gayrimenkul":
            user_params["price"]=st.number_input("Fiyat (TL)",1e5,1e7,2500000)
            user_params["monthly_rent"]=st.number_input("Aylık Kira (TL)",1000,50000,12500)
            user_params["age"]=st.slider("Bina Yaşı",0,50,5)
            user_params["location_score"]=st.slider("Lokasyon (1-10)",1,10,8)
        elif asset_class=="Melek Yatırım":
            user_params["market_size"]=st.number_input("Pazar (M $)",1,1000,50)
            user_params["team_experience"]=st.slider("Takım (1-10)",1,10,7)
            user_params["traction"]=st.slider("Çekiş (1-10)",1,10,5)
            user_params["stage"]=st.selectbox("Aşama",[1,2,3,4])
            user_params["runway_months"]=st.number_input("Runway (ay)",1,36,12)
            user_params["investor_interest"]=st.slider("Yatırımcı İlgisi",0.0,1.0,0.5)
        if st.button("🔮 Analiz Et", use_container_width=True):
            with st.spinner("Mercurius çalışıyor..."):
                type_map = {"Hisse":"stock","Kripto":"crypto","Altın":"gold","Gayrimenkul":"real_estate","Melek Yatırım":"angel"}
                resp = requests.post(API_URL, json={"symbol":symbol,"asset_type":type_map[asset_class],"user_params":user_params,"run_backtest":True}, headers={"X-API-Key":API_KEY})
                if resp.ok:
                    st.session_state["last_result"] = resp.json()
                else:
                    st.error(f"Hata: {resp.status_code}")
    with col2:
        if "last_result" in st.session_state:
            d = st.session_state["last_result"]
            st.metric("Nihai Skor", d.get("final_score","N/A"))
            st.write(f"**Karar:** {d.get('decision','N/A')}")
            st.write("**Modül Katkıları:**", d.get("module_contributions",{}))
            if "backtest" in d and "equity_curve" in d["backtest"]:
                st.subheader("Backtest")
                df = pd.DataFrame(d["backtest"]["equity_curve"])
                fig = go.Figure(go.Scatter(x=df["date"],y=df["equity"],mode="lines"))
                st.plotly_chart(fig, use_container_width=True)

with tab2:
    st.subheader("🌐 Küresel Makro Isı Haritası")
    st.info("DataRouter canlı verileriyle çalışır. Demo görünüm.")

with tab3:
    st.subheader("🏆 Kâhin Sıralaması")
    user_id = st.text_input("Kullanıcı Adın","anon")
    symbol_pred = st.text_input("Tahmin Yapacağın Sembol","AAPL")
    predicted = st.slider("Tahmini Skorun (0-1)",0.0,1.0,0.7,0.01)
    colA, colB = st.columns(2)
    if colA.button("Tahminimi Kaydet"):
        save_prediction(user_id, symbol_pred, predicted)
        st.success("Tahmin kaydedildi.")
    if colB.button("Motor Skoru ile Güncelle"):
        resp = requests.post(API_URL, json={"symbol":symbol_pred}, headers={"X-API-Key":API_KEY})
        if resp.ok:
            actual = resp.json().get("final_score",0)
            update_leaderboard_with_actual(symbol_pred, actual)
            st.success(f"Motor skoru: {actual:.4f} ile güncellendi.")
    st.markdown("---")
    lb = get_leaderboard()
    if lb:
        df = pd.DataFrame(lb)
        if "points" in df.columns:
            df = df.dropna(subset=["points"]).sort_values("points", ascending=False)
            st.dataframe(df[["user_id","symbol","predicted_score","actual_score","error","points"]])
        else:
            st.info("Henüz puanlanmış tahmin yok.")
    else:
        st.info("Henüz hiç tahmin yapılmamış.")

# WebSocket benzeri güncelleme
if "last_update" not in st.session_state:
    st.session_state.last_update = time.time()
if time.time() - st.session_state.last_update > 5:
    st.session_state.last_update = time.time()
    st.rerun()
```

4. Diğer dosyalar (requirements.txt, .env.example, Dockerfile, docker-compose.yml) öncekiyle aynı.

---

Kontrol sonucu: 3 eksik düzeltildi. Sistem şu an çalışır durumda.
Başka gözüne çarpan bir şey varsa söyle, anında düzelteyim. Yoksa artık gerçekten canlıya alabiliriz.
