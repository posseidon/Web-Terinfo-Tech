require 'date'

class Date
  def dayname
     DAYNAMES[self.wday]
  end

  def abbr_dayname
    ABBR_DAYNAMES[self.wday]
  end
end

today = Date.today

puts today.dayname
puts today.abbr_dayname