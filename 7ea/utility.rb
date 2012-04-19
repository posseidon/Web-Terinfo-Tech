module Utility
        
    #
    # Module method.
    #
    def Utility.degrees_to_radian(degrees)
        return (degrees * Math::PI / 180)
    end
    
    #
    # Also module method.
    #
    def sinus(degrees)
        Math.sin(degrees_to_radian(degrees))
    end
    
    module_function :sinus
    #module_function :sinus, :degrees_to_radian
    
    #
    # Private
    # Instance method.
    #
    def cosine(degrees)
        #Math.cos(Utility.degress_to_radian(degrees))
        Math.cos(degrees * Math::PI / 180)
    end

end

#puts Utility.degrees_to_radian(45)
#puts Utility.sinus(90)
#puts Utility.cosine(180)
#puts Utility.methods
#puts Utility.send(:cosine(90))

class TestUtility
    include Utility
    def cos(degrees)
        cosine(degrees)
    end
end

#puts TestUtility.new.cos(0)


#
# Extending and Including
#
module YAU
    module ClassMethods
        def degrees_to_radian(degrees)
            return (degrees * Math::PI / 180)
        end

        def sinus(degrees)
            Math.sin(degrees_to_radian(degrees))
        end
    end
    
    
    module InstanceMethods
        def cosine(degrees)
            Math.cos(degrees * Math::PI / 180)
        end        
    end
    
    def self.included(receiver)
        receiver.extend         ClassMethods
        receiver.send :include, InstanceMethods
    end
end

class YTUtility
    include YAU

    def cos(degrees)
        cosine(degrees)
    end
end

puts  YTUtility.new.cos(0)
puts YTUtility.sinus(90)


module Foo
  def foo
    puts 'heyyyyoooo!'
  end
end

class Bar
  include Foo
end

#Bar.new.foo # heyyyyoooo!
#Bar.foo # NoMethodError: undefined method ‘foo’ for Bar:Class

class Baz
  extend Foo
end

#Baz.foo # heyyyyoooo!
#Baz.new.foo # NoMethodError: undefined method ‘foo’ for #<Baz:0x1e708>