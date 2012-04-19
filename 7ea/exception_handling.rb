READ = "r"
WRITE = "w"

#
# No Exception Handling.
#
def file_peeker(file_path)
    file = File.open(file_path, READ)
    file.close    
end

#
# Guess exception types.
#
def file_peeker_v2(file_path)
    if( file_path != "" and File.exists?(file_path) )
        file = File.open(file_path, READ)
        file.close
    else
        raise "WTK02: File doest not exists or empty string"
    end
end

#
# Handle Exceptions globally.
#
def file_peeker_v3(file_path, mode)
    begin
        file = File.open(file_path, mode)
        file.close
    rescue Exception => e
        if e.class == Errno::ENOENT
            puts "Nem letezo file"
        else
            puts e
        end
    end
end

def file_peeker_v4(file_path, mode)
    file = nil
    begin
        file = File.open(file_path, mode)
    rescue Exception => e
        if e.class == Errno::ENOENT
            puts "Nem letezo file"
        else
            puts e
        end
    ensure
        file.close
    end
end

#file_peeker("")
#file_peeker_v2("")
#file_peeker_v2("micimacko")
#file_peeker_v3("routine", READ)
file_peeker_v4("01_routines.rb", READ)