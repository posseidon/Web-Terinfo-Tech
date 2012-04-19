require './person.rb'

class Employee < Person
    attr_reader :salary
    
    #
    # Constructor calling parent constructor.
    #
    def initialize(name, salary)
        @salary = salary
        super(name)
    end
    
    #
    # Calling Parent.private_method
    #
    def calling_taj_generator
        #self.private_taj_generator()
        self.send(:private_taj_generator)
    end
    
    #
    # Demonstrating Overriding
    #
    def method_name
        puts "I'm method first"
    end
    
    #
    # Winner of overriding
    #
    def method_name
        puts "I'm method second"
    end

    #
    # Addition operator.
    #
    def +(rhs)
        @salary += rhs.salary
        "#{self.to_s} #{rhs.to_s} and we both earn #{@salary + rhs.salary}"
    end

    #
    # Additional operator performing Shallow copy.
    #
    def <(rhs)
        obj = rhs.clone()
        @salary += obj.salary
    end
     
end

#emp = Employee.new('Peter', 100)
#person = Person.new('Adam')

#puts Employee.id_generator

#puts emp.method_name

#puts emp.calling_taj_generator

#emp1 = Employee.new('Peter', 100)
#emp2 = Employee.new('Fules', 200)
#puts emp1+emp2
#puts emp1<emp2

=begin
ALMAFA = 'MICI'
puts ALMAFA
ALMAFA = 'FULES'
puts ALMAFA
=end