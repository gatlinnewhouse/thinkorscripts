# SuperTrend Scan
# Mobius
# V01.10.2015
# Comment out (#) the direction NOT to use for a scan
# https://usethinkscript.com/threads/supertrend-indicator-by-mobius-for-thinkorswim.7/

input AtrMult = .70;
input nATR = 4;
input AvgType = AverageType.HULL;
def h = high;
def l = low;
def c = close;
def v = volume;
def ATR = MovingAverage(AvgType, TrueRange(h, c, l), nATR);
def UP = HL2 + (AtrMult * ATR);
def DN = HL2 + (-AtrMult * ATR);
def ST = if c < ST[1]
         then Round(UP / tickSize(), 0) * tickSize()
         else Round(DN / tickSize(), 0) * tickSize();
#plot SuperTrendUP = if ST crosses below close then 1 else 0;
plot SuperTrendDN = if ST crosses above close then 1 else 0;
# End Code SuperTrend
