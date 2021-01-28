# Mobius
# Supertrend Indicator
#
# What's new in V03.10.2015
#    Added Bubbles to mark entry and exit prices. Doesn't give much time to follow into trade, but better than guessing.
#    Altered default settings for values that made more sense on Intraday Futures. Added Color and ColorBars.
# Supertrend Indicator: shows trend direction and gives buy or sell signals according to that. It is based on a combination 
# of the average price rate in the current period along with a volatility indicator. The ATR indicator is most commonly used as 
# volatility indicator. The values are calculated as follows:
#    Up = (HIGH + LOW) / 2 + Multiplier * ATR
#    Down = (HIGH + LOW) / 2 – Multiplier * ATR
#    When the change of trend occurs, the indicator flips 
# https://usethinkscript.com/threads/supertrend-indicator-by-mobius-for-thinkorswim.7/
input AtrMult = 1.0;
input nATR = 4;
input AvgType = AverageType.HULL;
input PaintBars = yes;
def ATR = MovingAverage(AvgType, TrueRange(high, close, low), nATR);
def UP = HL2 + (AtrMult * ATR);
def DN = HL2 + (-AtrMult * ATR);
def ST = if close < ST[1] then UP else DN;
plot SuperTrend = ST;
SuperTrend.AssignValueColor(if close < ST then Color.RED else Color.GREEN);
AssignPriceColor(if PaintBars and close < ST

                 then Color.RED

                 else if PaintBars and close > ST

                      then Color.GREEN

                      else Color.CURRENT);

AddChartBubble(close crosses below ST, low[1], low[1], color.Dark_Gray);
AddChartBubble(close crosses above ST, high[1], high[1], color.Dark_Gray, no);
# End Code SuperTrend
