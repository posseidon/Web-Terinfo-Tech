
####### Input
puts "Who are you?"
gets
puts "Hello #{$_}"
name = $_
puts "------------------------------------------------"


####### Array and hashes
array = ["Hello", "World", 2012, 03, 29]
puts array
hash = {"Gyumolcs" => "Alma", "Allat" => "Zsiraf"}
puts hash['Allat']
hash['Virag'] = 'Rozsa'
puts hash
puts "------------------------------------------------"


####### Ranges
one_to_four = 1..4
puts one_to_four.to_a
puts "========================"
another_one_to_four = 1...5
puts another_one_to_four.to_a
puts "------------------------------------------------"


####### Unless
puts "How old are you?"
gets
unless Integer($_) > 29
    puts "Ifju Padavan vagy #{name}"
else
    puts "Master Jedi"
end
puts "------------------------------------------------"


####### Switch Case
temperature = 14
case temperature
when -10...0
    puts "Freezing"
when 0...4
    puts "Breeze"
when 5...16
    puts "Just perfect"
else
    puts "Exception"
end
puts "------------------------------------------------"


####### For loop
for var in 1..10
    puts "Iteration # " + var.to_s
end

vehicles = ['car', 'bike', 'truck', 'lorry', 'moped', 'balatoni Hummer']
for item in vehicles
    if name == 'Ben' 
        puts vehicles.last
    else
        puts item
    end
        
end

vehicles.each do |item|
    puts item
end

vehicles.each_with_index.map {|item, index| 
    puts "#{index}: #{item}"
}
puts "------------------------------------------------"

######### Methods
def greetings(name)
    puts "Hi #{name}"
end

def welcome(*names)
    names.each do |name|
        puts "Hi #{name}"
    end
    
end

greetings("Ben")
welcome("Robert Gida", "Mici macko", "Fules")

def add(a, b)
    a + b
end

def addMe(a, b)
    result = a + b
    return result
end

puts add(1,2)
puts addMe(1,2)

def greet_event_age(name, event, age)
    yield name, event, age
end

greet_event_age('Ben Obi-Van', 'Birthday', 19) {
    |name, event, age| 
    puts "On #{event} we wish #{name} a happy #{age} aniversary"
}






