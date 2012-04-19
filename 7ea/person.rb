#
# Author: Binh Nguyen
# Copyright (c) ELTE IK
# Document: Sample Class
#
class Person
    attr_reader :taj, :identifier
    attr_writer :age
    attr_accessor :name
    
    #
    # Default Constructor with multiple arguments.
    #
    def initialize(name)
        @name = name
        puts "Person:initialize #{name}"
    end
    
    #
    # Overridden to String method.
    #
    def to_s
        " I'm #{@name} "
    end
    
    #
    # Static Method.
    # Generates Identifier.
    #
    def self.id_generator
        return Random.rand(1000)
    end
    
    
    private
    
    #
    # Private method generating TAJ number.
    #
    def private_taj_generator
        @taj = Random.rand(100)
    end
    
    
end

#cls = Person.new("Ingrid")
#cls.to_s
#cls.taj = "2344-90"
#puts cls.age