# Pre-market High Low Indicator with Fibonacci for ThinkorSwim
# This indicator for ThinkorSwim will automatically plot overnight High and Low on your chart. In addition, the 
# indicator will also include Fibonacci retracement based on the highest and lowest values from pre-market.
# This can be useful for anyone who often plays pre-market breakout or breakdown. 
# You may want to check out [this](https://usethinkscript.com/threads/less-is-more-a-simple-day-trading-strategy-for-beginners.46/) strategy as well.
# https://usethinkscript.com/threads/pre-market-high-low-indicator-with-fibonacci-for-thinkorswim.75/
# GlobeX or Overnight High / Low with Fibonacci Values 

# Mobius 

# V01.2012 

input PlotOverNightExtremes = yes;

input coeff_1 = .236;

input coeff_2 = .327;

# gmh: added the rest of the Fibs 

input coeff_3 = .500;

input coeff_4 = .618;

input coeff_5 = .789;

input coeff_6 = .882;



def o = open;

def h = high;

def l = low;

def c = close;

def v = volume;

def bar = BarNumber();

def GlobeX = GetTime() < RegularTradingStart(GetYYYYMMDD());

def vol = if GlobeX and !Globex[1]

          then v

          else if GlobeX

               then vol[1] + v

               else Double.NaN;

def GlobeX_Volume = vol;

def ONhigh = if GlobeX and !Globex[1]

             then h

             else if Globex and

                     h > ONhigh[1]

                     then h

                  else ONhigh[1];

def ONhighBar = if GlobeX and h == ONhigh

                then Bar

                else double.nan;

def ONlow = if GlobeX and !GlobeX[1]

            then l

            else if GlobeX and

                    l < ONlow[1]

            then l

                 else ONlow[1];

def ONlowBar = if GlobeX and l == ONlow

               then Bar

               else double.nan;

def OverNightHigh = if BarNumber() == HighestAll(ONhighBar)

                    then ONhigh

                    else OverNightHigh[1];

def OverNightLow = if BarNumber() == HighestAll(ONlowBar)

                   then ONlow

                   else OverNightLow[1];

plot ONH = if OverNightHigh > 0

           then OverNightHigh

           else Double.NaN;

     ONH.SetHiding(!PlotOverNightExtremes);

     ONH.SetPaintingStrategy(PaintingStrategy.SQUARES);

     ONH.SetDefaultColor(Color.BLUE);

     ONH.HideBubble();

     ONH.HideTitle();

plot ONL = if OverNightLow > 0

           then OverNightLow

           else Double.NaN;

     ONL.SetHiding(!PlotOverNightExtremes);

     ONL.SetPaintingStrategy(PaintingStrategy.SQUARES);

     ONL.SetDefaultColor(Color.LIGHT_GRAY);

     ONL.HideBubble();

     ONL.HideTitle();



def MaxBar = Max(HighestAll(ONhighBar), HighestAll(ONlowBar));



plot coeff1 = if HighestAll(ONhighBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then ((OverNightHigh - OverNightLow) * coeff_1) + OverNightLow

              else if HighestAll(ONlowBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then OverNightHigh - ((OverNightHigh - OverNightLow) * coeff_1)

              else double.nan;

plot coeff2 = if HighestAll(ONhighBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then ((OverNightHigh - OverNightLow) * coeff_2) + OverNightLow

               else if HighestAll(ONlowBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then OverNightHigh - ((OverNightHigh - OverNightLow) * coeff_2)

              else double.nan;

plot coeff3 = if HighestAll(ONhighBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then ((OverNightHigh - OverNightLow) * coeff_3) + OverNightLow

              else if HighestAll(ONlowBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then OverNightHigh - ((OverNightHigh - OverNightLow) * coeff_3)

              else double.nan;

plot coeff4 = if HighestAll(ONhighBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then ((OverNightHigh - OverNightLow) * coeff_4) + OverNightLow

              else if HighestAll(ONlowBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then OverNightHigh - ((OverNightHigh - OverNightLow) * coeff_4)

              else double.nan;

plot coeff5 = if HighestAll(ONhighBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then ((OverNightHigh - OverNightLow) * coeff_5) + OverNightLow

              else if HighestAll(ONlowBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then OverNightHigh - ((OverNightHigh - OverNightLow) * coeff_5)

              else double.nan;

plot coeff6 = if HighestAll(ONhighBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then ((OverNightHigh - OverNightLow) * coeff_6) + OverNightLow

              else if HighestAll(ONlowBar) == MaxBar and OverNightLow > 0 and OverNightHigh > 0

              then OverNightHigh - ((OverNightHigh - OverNightLow) * coeff_6)

              else double.nan;

# 

# End Code GlobeX High Low with Fibs 
