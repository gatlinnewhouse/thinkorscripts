# ConnorsRSI Indicator with Buy/Sell bubbles
# Just another script I put together for TOS. This is a short term mean reversion indicator.
# This is named after Larry Conners who suggests that this short term strategy offers positive returns.
# The lower the value of the ConnorsRSI, the higher correlation with positive returns in the following 3 trading days. Values below 10 generate a buy. 
# Values below 5 generate a strong buy signal. Values above 90/95 generate sell and strong sell signals.
# 2 entry options: 
#   1. Connors recommended looking for values just before the close, so that you can gain on gap up the following day. (higher risk) 
#   2. Enter on the open the following day after the signal is generated (lower risk). 
# https://www.reddit.com/r/wallstreetbets/comments/89n6lo/connors_rsi_script_for_think_or_swim_tos/?ref=share&ref_source=link
declare lower;
input Price_RSI_Period = 3;
input Streak_RSI_Period = 2;
input Rank_Lookback = 100;
input Top_Band = 95;
input Upper_Band = 90;
input Lower_Band = 10;
input Bottom_Band = 5;
input MAPeriod = 5;
# Component 1: the RSI of closing price 
def priceRSI = reference RSI("price" = close, "length" = Price_RSI_Period); 
# Component 2: the RSI of the streak 
def upDay = if close > close[1] then 1 else 0;
def downDay = if close < close[1] then -1 else 0;
def upStreak = if upDay != 0 then upStreak[1] + upDay else 0;
def downStreak = if downDay != 0 then downStreak[1] + downDay else 0;
def streak = upStreak + downStreak;
def streakRSI = reference RSI("price" = streak, "length" = Streak_RSI_Period); 
# Component 3: The percent rank of the current return 
def ROC1 = close / close[1] - 1;
def rank = fold i = 1 to Rank_Lookback + 1 with r = 0 do r + (GetValue(ROC1, i, Rank_Lookback) < ROC1);
def pctRank = (rank / Rank_Lookback) * 100 ; 
# The final ConnorsRSI calculation, combining the three components 
plot ConnorsRSI = (priceRSI + streakRSI + pctRank) / 3;
ConnorsRSI.SetDefaultColor (Color.WHITE);
# Plot the upper and lower bands 
plot max = Top_Band;
plot midH = Upper_Band;
plot low = Bottom_Band;
plot midL = Lower_Band;
max.SetDefaultColor (Color.RED);
midH.SetDefaultColor (Color.PINK);
low.SetDefaultColor (Color.GREEN);
midL.SetDefaultColor (Color.LIME);

#Add bubbles to the indicator for strong overbought and oversold situations
#This is designed for positive trending markets (price>200 SMA), the reverse would be 
#applicable for negative trending markets.  
#This is a mean reversion study.  Buy and StrBuy are only triggered when price is below 
#the SMA (default value 5) AND ConnorsRSI is below 10/5, and Sell/StrSell are triggered 
#when price is above SMA (default value 5) AND Connors RSI is above 90/95.
AddChartBubble( ConnorsRSI > max and close > SimpleMovingAvg(length = MAPeriod), ConnorsRSI, "StrSell", Color.Red, No);
AddChartBubble( ConnorsRSI > midH and ConnorsRSI < max and close > SimpleMovingAvg(length = MAPeriod), ConnorsRSI, "Sell", Color.Pink, No);
AddChartBubble( ConnorsRSI < low and close < SimpleMovingAvg(length = MAPeriod), ConnorsRSI, "StrBuy", Color.green, yes);
AddChartBubble( ConnorsRSI < midL and ConnorsRSI > low and close < SimpleMovingAvg(length = MAPeriod), ConnorsRSI, "Buy", Color.lime, Yes);
