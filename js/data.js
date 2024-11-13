const matLangData = {
  "Python Getting Started": {
    title: "Python Getting Started",
    subtitle: "Introduction to Python Installation and Quickstart",
    Ques: [
      {
        Ques: "Python Install",
        sol1: "Many PCs and Macs will have Python already installed.",
        code1: [],
       
        
      },
      {
        Ques: "",
        sol1: "To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe):",
        code1: [{
          code:"C:\\Users\\Your Name> python --version"
        }],
       
        
      },
      {
        Ques: "",
        sol1: "To check if you have python installed on a Linux or Mac, then on linux open the command line or on Mac open the Terminal and type:",
        code1: [{
          code:"python --version"
        }],
        
       
        
      },
      {
        Ques: "",
        sol1: "If you find that you do not have Python installed on your computer, then you can download it for free from the following website: https://www.python.org/",
        code1: [],
        
       
        
      },

      {
        Ques: "Python Quickstart",
        sol1: "Python is an interpreted programming language, meaning that you write Python (.py) files in a text editor and then run those files in the Python interpreter to be executed",
        code1: []
      },
      {
        Ques: "",
        sol1: "The way to run a python file is like this on the command line:",
        code1: [{
            code:`C:\Users\Your Name>python helloworld.py`
        }],
        
       
        
      },
      {
        Ques: "",
        sol1:`Where "helloworld.py" is the name of your python file.

Let's write our first Python file, called helloworld.py, which can be done in any text editor.`,
        code1: [{
            code:`print("Hello, World!")`
        }],
        
       
        
      },
      {
        Ques: "",
        sol1:`Simple as that. Save your file. Open your command line, navigate to the directory where you saved your file, and run:`,
        code1: [{
            code:`C:\Users\Your Name>python helloworld.py`
        }],
      },
      {
        Ques: "",
        sol1:`The output should read:`,
        code1: [{
            code:`Hello, World!`
        }],
      },
      {
        Ques: "",
        sol1:`Congratulations, you have written and executed your first Python program.`,
        code1: [],
      },
      {
        Ques: "Python Editor",
        sol1: "We provide an online Python editor where you can execute Python code directly in your browser and view the results immediately. Try it by visiting the Python tutorial page and using the editor to run code examples, like printing 'Hello, World!'",
        code1: [
          {
            code: "print('Hello, World!')"
          }
        ]
      },
      {
        Ques: "Python Version",
        sol1: "You can check the Python version of the editor or your local Python installation by importing the `sys` module and printing the version:",
        code1: [
          {
            code: "import sys\nprint(sys.version)"
          }
        ]
      },
      {
        Ques: "The Python Command Line",
        sol1: "To test a short amount of code in python sometimes it is quickest and easiest not to write the code in a file. This is made possible because Python can be run as a command line itself.",
        code1: [
          {
            code: ">>> exit()"
          }
        ]
      },
      {
        Ques: "",
        sol1: "Type the following on the Windows, Mac or Linux command line:",
        code1: [
          {
            code: `C:\Users\Your Name>python`
          }
        ]
      },
      {
        Ques: "",
        sol1: `Or, if the "python" command did not work, you can try "py":`,
        code1: [
          {
            code: `C:\Users\Your Name>py`
          }
        ]
      },
      {
        Ques: "",
        sol1: `From there you can write any python, including our hello world example from earlier in the tutorial:`,
        code1: [
          {
            code: `C:\Users\Your Name>python
Python 3.6.4 (v3.6.4:d48eceb, Dec 19 2017, 06:04:45) [MSC v.1900 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello, World!")`
          }
        ]
      },
      {
        Ques: "",
        sol1: `Which will write "Hello, World!" in the command line:`,
        code1: [
          {
            code: `C:\Users\Your Name>python
Python 3.6.4 (v3.6.4:d48eceb, Dec 19 2017, 06:04:45) [MSC v.1900 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license" for more information.
>>> print("Hello, World!")
Hello, World!`
          }
        ]
      },
      {
        Ques: "",
        sol1: `Whenever you are done in the python command line, you can simply type the following to quit the python command line interface:`,
        code1: [
          {
            code: `exit()`
          }
        ]
      }
    ]
  },
  /*****************************************************************************************************/

  "Python Syntax": {
    title: "Python Syntax",
    subtitle: "",
    Ques: [
      {
        Ques: "Execute Python Syntax",
        sol1: `As we learned in the previous page, Python syntax can be executed by writing directly in the Command Line:`,
        code1: [
          {
            code: `>>> print("Hello, World!")
Hello, World!`,
          },
        ],
        sol2: `Or by creating a Python file on the server, using the .py file extension, and running it in the Command Line:`,
        code2: [
          {
            code: `C:\\Users\\Your Name>python myfile.py`,
          },
        ],
      },
      {
        Ques: "Python Indentation",
        sol1: `Indentation refers to the spaces at the beginning of a code line.

Where in other programming languages, the indentation in code is for readability only, the indentation in Python is very important.

Python uses indentation to indicate a block of code.`,
        code1: [
          {
            code: `if 5 > 2:
    print("Five is greater than two!")`,
          },
        ],
        sol2: `Python will give you an error if you skip the indentation:`,
        code2: [
          {
            code: `if 5 > 2:
print("Five is greater than two!")`,
          },
        ],
        sol3: `The number of spaces is up to you as a programmer, the most common use is four, but it has to be at least one.`,
        code3: [
          {
            code: `if 5 > 2:
 print("Five is greater than two!") 
if 5 > 2:
        print("Five is greater than two!")`,
          },
        ],
        sol4: `You have to use the same number of spaces in the same block of code, otherwise Python will give you an error:`,
        code4: [
          {
            code: `if 5 > 2:
 print("Five is greater than two!")
        print("Five is greater than two!")`,
          },
        ],
      },
      {
        Ques: "Python Variables",
        sol1: `In Python, variables are created when you assign a value to them:`,
        code1: [
          {
            code: `x = 5
y = "Hello, World!"`,
          },
        ],
        sol2: `Python has no command for declaring a variable.

You will learn more about variables in the Python Variables chapter.`,
      },
      {
        Ques: "Comments",
        sol1: `Python has commenting capability for the purpose of in-code documentation.

Comments start with a #, and Python will render the rest of the line as a comment:`,
        code1: [
          {
            code: `# This is a comment.
print("Hello, World!")`,
          },
        ],
        sol2: `You can also write multi-line comments using triple quotes, but this is typically reserved for docstrings:`,
        code2: [
          {
            code: `"""
This is a multi-line comment.
It can span multiple lines.
"""
print("Hello, World!")`,
          },
        ],
      },
    ],
  },
  /*****************************************************************************************************/
  "Python Comments": {
    title: "Python Comments",
    subtitle:
      "Comments can be used to explain Python code, make the code more readable & prevent execution when testing code.",
    Ques: [
      {
        Ques: "Creating a Comment",
        sol1: `Comments start with a #, and Python will ignore them:`,
        code1: [
          {
            code: `#This is a comment
print("Hello, World!")`,
          },
        ],
        sol2: `Comments can be placed at the end of a line, and Python will ignore the rest of the line:`,
        code2: [
          {
            code: `print("Hello, World!") #This is a comment`,
          },
        ],
        sol3: `A comment does not have to be text that explains the code, it can also be used to prevent Python from executing code:`,
        code3: [
          {
            code: `#print("Hello, World!")
print("Cheers, Mate!")`,
          },
        ],
      },
      {
        Ques: "Multiline Comments",
        sol1: `Python does not really have a syntax for multiline comments.

To add a multiline comment you could insert a # for each line:`,
        code1: [
          {
            code: `#This is a comment
#written in
#more than just one line
print("Hello, World!")`,
          },
        ],
        sol2: `Or, not quite as intended, you can use a multiline string.

Since Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code, and place your comment inside it:`,
        code2: [
          {
            code: `"""
This is a comment
written in
more than just one line
"""
print("Hello, World!")`,
          },
        ],
        sol3: `As long as the string is not assigned to a variable, Python will read the code, but then ignore it, and you have made a multiline comment.

`,
      },
    ],
  },
  /*****************************************************************************************************/
  "Python Variables": {
    title: "Python Variables",
    subtitle: "Variables are containers for storing data values.",
    Ques: [
      {
        Ques: "Creating Variables",
        sol1: `Python has no command for declaring a variable.

A variable is created the moment you first assign a value to it.`,
        code1: [
          {
            code: `x = 5
y = "John"
print(x)
print(y)`,
          },
        ],
        sol2: `Variables do not need to be declared with any particular type, and can even change type after they have been set.`,
        code2: [
          {
            code: `x = 4       # x is of type int
x = "Sally"     # x is now of type str
print(x)`,
          },
        ],
      },
      {
        Ques: "Casting",
        sol1: `If you want to specify the data type of a variable, this can be done with casting.`,
        code1: [
          {
            code: `x = str(3)    # x will be '3'
y = int(3)    # y will be 3
z = float(3)  # z will be 3.0`,
          },
        ],
      },
      {
        Ques: "Get the Type",
        sol1: `You can get the data type of a variable with the type() function.`,
        code1: [
          {
            code: `x = 5
y = "John"
print(type(x))
print(type(y))`,
          },
        ],
        sol2: `You will learn more about data types and casting later in this tutorial.`,
      },
      {
        Ques: "Single or Double Quotes?",
        sol1: `String variables can be declared either by using single or double quotes:`,
        code1: [
          {
            code: `x = "John"
# is the same as
x = 'John'`,
          },
        ],
      },
      {
        Ques: "Case-Sensitive",
        sol1: `Variable names are case-sensitive.`,
        code1: [
          {
            code: `a = 4
A = "Sally"
# A will not overwrite a`,
          },
        ],
      },
    ],
  },
  /*****************************************************************************************************/
  "Python Data Types": {
    title: "Python Data Types",
    subtitle:
      "In programming, data type is an important concept. Variables can store data of different types, and different types can do different things.",
    Ques: [
      {
        Ques: "Built-in Data Types",
        sol1: `Python has the following built-in data types, categorized as follows:`,
        code1: [
          {
            code: `# Text Type
str

# Numeric Types
int, float, complex

# Sequence Types
list, tuple, range

# Mapping Type
dict

# Set Types
set, frozenset

# Boolean Type
bool

# Binary Types
bytes, bytearray, memoryview

# None Type
NoneType`,
          },
        ],
      },
      {
        Ques: "Getting the Data Type",
        sol1: `You can get the data type of any object using the built-in function type().`,
        code1: [
          {
            code: `x = 5
print(type(x))  # Output: <class 'int'>`,
          },
        ],
      },
      {
        Ques: "Setting the Data Type",
        sol1: `In Python, the data type is determined when you assign a value to a variable. Here's how different types can be assigned:`,
        code1: [
          {
            code: `x = "Hello World"    # str
x = 20                 # int
x = 20.5               # float
x = 1j                 # complex
x = ["apple", "banana", "cherry"]  # list
x = ("apple", "banana", "cherry")  # tuple
x = range(6)           # range
x = {"name" : "John", "age" : 36}  # dict
x = {"apple", "banana", "cherry"}  # set
x = frozenset({"apple", "banana", "cherry"})  # frozenset
x = True               # bool
x = b"Hello"           # bytes
x = bytearray(5)       # bytearray
x = memoryview(bytes(5))  # memoryview
x = None               # NoneType`,
          },
        ],
      },
      {
        Ques: "Setting the Specific Data Type",
        sol1: `If you want to specify the data type, you can use constructor functions to convert values to the desired type.`,
        code1: [
          {
            code: `x = str("Hello World")        # str
x = int(20)                     # int
x = float(20.5)                 # float
x = complex(1j)                 # complex
x = list(("apple", "banana", "cherry"))  # list
x = tuple(("apple", "banana", "cherry")) # tuple
x = range(6)                    # range
x = dict(name="John", age=36)   # dict
x = set(("apple", "banana", "cherry"))  # set
x = frozenset(("apple", "banana", "cherry"))  # frozenset
x = bool(5)                     # bool
x = bytes(5)                    # bytes
x = bytearray(5)                # bytearray
x = memoryview(bytes(5))        # memoryview`,
          },
        ],
      },
    ],
  },
  /*****************************************************************************************************/
  "Python Numbers": {
    title: "Python Numbers",
    subtitle: "",
    Ques: [
      {
        Ques: "Python Numeric Types",
        sol1: `There are three numeric types in Python:`,
        sol2: `- <strong>int</strong> (integer)`,
        sol3: `- <strong>float</strong> (floating point number)`,
        sol4: `- <strong>complex</strong> (complex numbers)`,
      },
      {
        Ques: "Creating Variables",
        sol1: `Variables of numeric types are created when you assign a value to them:`,
        code1: [
          {
            code: `x = 1    # int\ny = 2.8  # float\nz = 1j   # complex`,
          },
        ],
        sol2: `To verify the type of any object in Python, use the <code>type()</code> function:`,
        code2: [
          {
            code: `print(type(x))\nprint(type(y))\nprint(type(z))`,
          },
        ],
      },
      {
        Ques: "Int (Integer)",
        sol1: `Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.`,
        sol2: `Example:`,
        code1: [
          {
            code: `x = 1\n y = 35656222554887711\n z = -3255522\n\n print(type(x))\n print(type(y))\n print(type(z))`,
          },
        ],
      },
      {
        Ques: "Float (Floating Point Number)",
        sol1: `Float, or "floating point number", is a number, positive or negative, containing one or more decimals.`,
        sol2: `Example:`,
        code1: [
          {
            code: `x = 1.10\n y = 1.0\n z = -35.59\n\n print(type(x))\n print(type(y))\n print(type(z))`,
          },
        ],
        sol3: `Float can also be scientific numbers with an "e" to indicate the power of 10.`,
        sol4: `Example:`,
        code2: [
          {
            code: `x = 35e3\n y = 12E4\n z = -87.7e100\n\n print(type(x))\n print(type(y))\n print(type(z))`,
          },
        ],
      },
      {
        Ques: "Complex Numbers",
        sol1: `Complex numbers are written with a "j" as the imaginary part.`,
        sol2: `Example:`,
        code1: [
          {
            code: `x = 3+5j\n y = 5j\n z = -5j\n\n print(type(x))\n print(type(y))\n print(type(z))`,
          },
        ],
      },
      {
        Ques: "Type Conversion",
        sol1: `You can convert from one type to another with the <code>int()</code>, <code>float()</code>, and <code>complex()</code> methods.`,
        sol2: `Example: Convert from one type to another:`,
        code1: [
          {
            code: `x = 1    # int\n y = 2.8  # float\n z = 1j   # complex\n\n #convert from int to float:\n a = float(x)\n\n #convert from float to int:\n b = int(y)\n\n #convert from int to complex:\n c = complex(x)\n\n print(a)\n print(b)\n print(c)\n\n print(type(a))\n print(type(b))\n print(type(c))`,
          },
        ],
        sol3: `Note: You cannot convert complex numbers into another number type.`,
      },
      {
        Ques: "Random Number",
        sol1: `Python does not have a <code>random()</code> function to make a random number, but Python has a built-in module called <code>random</code> that can be used to make random numbers.`,
        sol2: `Example: Import the random module, and display a random number between 1 and 9:`,
        code1: [
          {
            code: `import random\n\n print(random.randrange(1, 10))`,
          },
        ],
        sol3: `In our Random Module Reference you will learn more about the Random module.`,
      },
    ],
  },
  /****************************************************************************************************/
  "Python Casting": {
    title: "Python Casting",
    subtitle:
      "Casting is the process of converting one data type into another.",
    Ques: [
      {
        Ques: "Specify a Variable Type",
        sol1: "There may be times when you want to specify a type onto a variable. This can be done with casting. Python is an object-oriented language, and as such, it uses classes to define data types, including its primitive types.",
        sol2: "Casting in Python is done using constructor functions:",
        code1: [
          {
            code: "int() - constructs an integer number from an integer literal, a float literal (by removing all decimals), or a string literal (providing the string represents a whole number)",
          },
          {
            code: "float() - constructs a float number from an integer literal, a float literal or a string literal (providing the string represents a float or an integer)",
          },
          {
            code: "str() - constructs a string from a wide variety of data types, including strings, integer literals and float literals",
          },
        ],
      },
      {
        Ques: "Casting to Integers",
        sol1: "You can cast a variable to an integer using the <code>int()</code> function.",
        code1: [
          {
            code: "x = int(1)   # x will be 1\n y = int(2.8) # y will be 2\n z = int('3') # z will be 3",
          },
        ],
      },
      {
        Ques: "Casting to Floats",
        sol1: "You can cast a variable to a float using the <code>float()</code> function.",
        code1: [
          {
            code: "x = float(1)     # x will be 1.0\n y = float(2.8)   # y will be 2.8\n z = float('3')   # z will be 3.0\n w = float('4.2') # w will be 4.2",
          },
        ],
      },
      {
        Ques: "Casting to Strings",
        sol1: "You can cast a variable to a string using the <code>str()</code> function.",
        code1: [
          {
            code: "x = str('s1')  # x will be 's1'\n y = str(2)     # y will be '2'\n z = str(3.0)   # z will be '3.0'",
          },
        ],
      },
    ],
  },
  /******************************************************************************************************/
  "Python Strings": {
    title: "Python Strings",
    subtitle:
      "Strings in Python are sequences of characters surrounded by either single or double quotation marks.",
    Ques: [
      {
        Ques: "Strings in Python",
        sol1: "Strings in Python are surrounded by either single quotation marks, or double quotation marks. For example, 'hello' is the same as \"hello\".",
        sol2: "You can display a string literal using the print() function:",
        code1: [
          {
            code: "print('Hello')",
          },
          {
            code: 'print("Hello")',
          },
        ],
      },
      {
        Ques: "Quotes Inside Quotes",
        sol1: "You can use quotes inside a string, as long as they don't match the quotes surrounding the string.",
        code1: [
          {
            code: 'print("It\'s alright")',
          },
          {
            code: "print(\"He is called 'Johnny'\")",
          },
          {
            code: "print('He is called \"Johnny\"')",
          },
        ],
      },
      {
        Ques: "Assign String to a Variable",
        sol1: "Assigning a string to a variable is done with the variable name followed by an equal sign and the string.",
        code1: [
          {
            code: 'a = "Hello"\nprint(a)',
          },
        ],
      },
      {
        Ques: "Multiline Strings",
        sol1: "You can assign a multiline string to a variable by using three quotes. You can use either three double quotes or three single quotes.",
        code1: [
          {
            code: 'a = """\nLorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua."\nprint(a)',
          },
          {
            code: "a = '''\nLorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.'''\nprint(a)",
          },
        ],
      },
      {
        Ques: "Strings are Arrays",
        sol1: "In Python, strings are arrays of bytes representing Unicode characters. A single character is simply a string with a length of 1.",
        sol2: "Square brackets can be used to access elements of the string.",
        code1: [
          {
            code: 'a = "Hello, World!"\nprint(a[1])',
          },
        ],
      },
      {
        Ques: "Looping Through a String",
        sol1: "Since strings are arrays, you can loop through the characters in a string with a for loop.",
        code1: [
          {
            code: 'for x in "banana":\n  print(x)',
          },
        ],
      },
      {
        Ques: "String Length",
        sol1: "To get the length of a string, use the len() function.",
        code1: [
          {
            code: 'a = "Hello, World!"\nprint(len(a))',
          },
        ],
      },
      {
        Ques: "Check String",
        sol1: "To check if a certain phrase or character is present in a string, you can use the keyword 'in'.",
        code1: [
          {
            code: 'txt = "The best things in life are free!"\nprint("free" in txt)',
          },
        ],
        sol2: "You can also use it in an if statement to print something only if the phrase is present.",
        code2: [
          {
            code: 'txt = "The best things in life are free!"\nif "free" in txt:\n  print("Yes, \'free\' is present.")',
          },
        ],
      },
      {
        Ques: "Check if NOT",
        sol1: "To check if a certain phrase or character is NOT present in a string, you can use the keyword 'not in'.",
        code1: [
          {
            code: 'txt = "The best things in life are free!"\nprint("expensive" not in txt)',
          },
        ],
        sol2: "You can also use it in an if statement to print something only if the phrase is not present.",
        code2: [
          {
            code: 'txt = "The best things in life are free!"\nif "expensive" not in txt:\n  print("No, \'expensive\' is NOT present.")',
          },
        ],
      },
    ],
  },
  /*****************************************************************************************************/
  "Python Booleans": {
    title: "Python Booleans",
    subtitle: "Booleans represent one of two values: True or False.",
    Ques: [
      {
        Ques: "Boolean Values",
        sol1: "In programming, you often need to know if an expression is True or False. You can evaluate any expression in Python and get one of two answers, True or False.",
        sol2: "When you compare two values, the expression is evaluated and Python returns the Boolean answer.",
        code1: [
          {
            code: "print(10 > 9)",
          },
          {
            code: "print(10 == 9)",
          },
          {
            code: "print(10 < 9)",
          },
        ],
      },
      {
        Ques: "Evaluate Values and Variables",
        sol1: "The bool() function allows you to evaluate any value and return True or False.",
        code1: [
          {
            code: 'print(bool("Hello"))',
          },
          {
            code: "print(bool(15))",
          },
          {
            code: 'x = "Hello"\ny = 15\nprint(bool(x))\nprint(bool(y))',
          },
        ],
      },
      {
        Ques: "Most Values are True",
        sol1: "Almost any value is evaluated to True if it has content. Non-empty strings, numbers (except 0), and non-empty collections (list, tuple, set, dictionary) are True.",
        code1: [
          {
            code: 'print(bool("abc"))',
          },
          {
            code: "print(bool(123))",
          },
          {
            code: 'print(bool(["apple", "cherry", "banana"]))',
          },
        ],
      },
      {
        Ques: "Some Values are False",
        sol1: "Values that evaluate to False include empty values like empty strings, 0, None, and empty collections. False itself also evaluates to False.",
        code1: [
          {
            code: "print(bool(False))",
          },
          {
            code: "print(bool(None))",
          },
          {
            code: "print(bool(0))",
          },
          {
            code: 'print(bool(""))',
          },
          {
            code: "print(bool(()))",
          },
          {
            code: "print(bool([]))",
          },
          {
            code: "print(bool({}))",
          },
        ],
      },
      {
        Ques: "Object Evaluates to False",
        sol1: "An object made from a class with a __len__ function that returns 0 or False will also evaluate to False.",
        code1: [
          {
            code: "class myclass():\n  def __len__(self):\n    return 0\nmyobj = myclass()\nprint(bool(myobj))",
          },
        ],
      },
      {
        Ques: "Functions can Return a Boolean",
        sol1: "You can create functions that return a Boolean value. You can also execute code based on the Boolean answer of a function.",
        code1: [
          {
            code: "def myFunction():\n  return True\nprint(myFunction())",
          },
          {
            code: 'def myFunction():\n  return True\nif myFunction():\n  print("YES!")\nelse:\n  print("NO!")',
          },
        ],
      },
      {
        Ques: "Check with isinstance()",
        sol1: "Python has many built-in functions that return a boolean value. One such function is isinstance(), which can check if an object is of a certain data type.",
        code1: [
          {
            code: "x = 200\nprint(isinstance(x, int))",
          },
        ],
      },
    ],
  },
  /*****************************************************************************************************/
  "Python Operators": {
    title: "Python Operators",
    subtitle: "Python Operators Overview and Usage",
    Ques: [
      {
        Ques: "Python Operators",
        sol1: "Operators are used to perform operations on variables and values. Python supports a variety of operators, including arithmetic, assignment, comparison, logical, identity, membership, and bitwise operators.",
        code1: [
          {
            code: "print(10 + 5)"
          }
        ]
      },
      {
        Ques: "Python Arithmetic Operators",
        sol1: "Arithmetic operators are used with numeric values to perform common mathematical operations.",
        code1: [
          {
            code: "x + y  # Addition"
          },
          {
            code: "x - y  # Subtraction"
          },
          {
            code: "x * y  # Multiplication"
          },
          {
            code: "x / y  # Division"
          },
          {
            code: "x % y  # Modulus"
          },
          {
            code: "x ** y  # Exponentiation"
          },
          {
            code: "x // y  # Floor division"
          }
        ]
      },
      {
        Ques: "Python Assignment Operators",
        sol1: "Assignment operators are used to assign values to variables.",
        code1: [
          {
            code: "x = 5  # x gets the value 5"
          },
          {
            code: "x += 3  # x = x + 3"
          },
          {
            code: "x -= 3  # x = x - 3"
          },
          {
            code: "x *= 3  # x = x * 3"
          },
          {
            code: "x /= 3  # x = x / 3"
          },
          {
            code: "x %= 3  # x = x % 3"
          },
          {
            code: "x //= 3  # x = x // 3"
          },
          {
            code: "x **= 3  # x = x ** 3"
          },
          {
            code: "x &= 3  # x = x & 3"
          },
          {
            code: "x |= 3  # x = x | 3"
          },
          {
            code: "x ^= 3  # x = x ^ 3"
          },
          {
            code: "x >>= 3  # x = x >> 3"
          },
          {
            code: "x <<= 3  # x = x << 3"
          },
          {
            code: "x := 3  # Assignment expression"
          }
        ]
      },
      {
        Ques: "Python Comparison Operators",
        sol1: "Comparison operators are used to compare two values.",
        code1: [
          {
            code: "x == y  # Equal"
          },
          {
            code: "x != y  # Not equal"
          },
          {
            code: "x > y  # Greater than"
          },
          {
            code: "x < y  # Less than"
          },
          {
            code: "x >= y  # Greater than or equal to"
          },
          {
            code: "x <= y  # Less than or equal to"
          }
        ]
      },
      {
        Ques: "Python Logical Operators",
        sol1: "Logical operators are used to combine conditional statements.",
        code1: [
          {
            code: "x < 5 and x < 10  # Returns True if both conditions are true"
          },
          {
            code: "x < 5 or x < 4  # Returns True if at least one condition is true"
          },
          {
            code: "not(x < 5 and x < 10)  # Returns False if both conditions are true"
          }
        ]
      },
      {
        Ques: "Python Identity Operators",
        sol1: "Identity operators are used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location.",
        code1: [
          {
            code: "x is y  # Returns True if x and y are the same object"
          },
          {
            code: "x is not y  # Returns True if x and y are not the same object"
          }
        ]
      },
      {
        Ques: "Python Membership Operators",
        sol1: "Membership operators are used to test if a sequence is present in an object.",
        code1: [
          {
            code: "x in y  # Returns True if x is in y"
          },
          {
            code: "x not in y  # Returns True if x is not in y"
          }
        ]
      },
      {
        Ques: "Python Bitwise Operators",
        sol1: "Bitwise operators are used to compare (binary) numbers.",
        code1: [
          {
            code: "x & y  # Bitwise AND"
          },
          {
            code: "x | y  # Bitwise OR"
          },
          {
            code: "x ^ y  # Bitwise XOR"
          },
          {
            code: "~x  # Bitwise NOT"
          },
          {
            code: "x << 2  # Bitwise left shift"
          },
          {
            code: "x >> 2  # Bitwise right shift"
          }
        ]
      },
      {
        Ques: "Operator Precedence",
        sol1: "Operator precedence describes the order in which operations are performed. Parentheses have the highest precedence, followed by exponentiation, unary operations, and so on.",
        code1: [
          {
            code: "print((6 + 3) - (6 + 3))  # Parentheses first"
          },
          {
            code: "print(100 + 5 * 3)  # Multiplication before addition"
          }
        ]
      },
      {
        Ques: "Operator Precedence Table",
        sol1: "When operators have the same precedence, they are evaluated from left to right. Here is the order of precedence, starting from the highest.",
        code1: []
      },
      {
        Ques: "Example of Left-to-Right Evaluation",
        sol1: "Addition and subtraction have the same precedence, so they are evaluated from left to right.",
        code1: [
          {
            code: "print(5 + 4 - 7 + 3)"
          }
        ]
      }
    ]
  },
  /*****************************************************************************************************/
  "Python Lists": {
    title: "Python Lists",
    subtitle:
      "Lists are used to store multiple items in a single variable. They are one of 4 built-in data types in Python used to store collections of data, along with Tuple, Set, and Dictionary.",
    Ques: [
      {
        Ques: "Creating a List",
        sol1: "Lists are created using square brackets. Here's how you can create a simple list:",
        code1: [
          {
            code: `thislist = ["apple", "banana", "cherry"]
print(thislist)`,
          },
        ],
      },
      {
        Ques: "List Items - Ordered, Changeable, and Allow Duplicate Values",
        sol1: `List items are ordered (have a defined order), changeable (can be modified), and allow duplicate values. You can access list items using their index (starting from 0).`,
        code1: [
          {
            code: `thislist = ["apple", "banana", "cherry", "apple", "cherry"]
print(thislist)`,
          },
        ],
      },
      {
        Ques: "List Length",
        sol1: "You can determine the length of a list using the len() function:",
        code1: [
          {
            code: `thislist = ["apple", "banana", "cherry"]
print(len(thislist))`,
          },
        ],
      },
      {
        Ques: "List Items - Data Types",
        sol1: "A list can store items of any data type. It can even store multiple data types together in one list.",
        code1: [
          {
            code: `list1 = ["apple", "banana", "cherry"]
list2 = [1, 5, 7, 9, 3]
list3 = [True, False, False]

# A list can contain different data types:
list1 = ["abc", 34, True, 40, "male"]`,
          },
        ],
      },
      {
        Ques: "What is the data type of a list?",
        sol1: "From Python's perspective, lists are objects with the data type 'list'. You can check the type using the type() function.",
        code1: [
          {
            code: `mylist = ["apple", "banana", "cherry"]
print(type(mylist))  # Output: <class 'list'>`,
          },
        ],
      },
      {
        Ques: "The list() Constructor",
        sol1: "You can also use the list() constructor to create a list. Here's how to use it:",
        code1: [
          {
            code: `thislist = list(("apple", "banana", "cherry"))  # note the double round-brackets
print(thislist)`,
          },
        ],
      },
      {
        Ques: "Python Collections (Arrays)",
        sol1: "There are four main collection data types in Python: List, Tuple, Set, and Dictionary, each with different characteristics and usage.",
        code1: [
          {
            code: `# List - Ordered, Changeable, Allows Duplicates
list1 = ["apple", "banana", "cherry"]

# Tuple - Ordered, Unchangeable, Allows Duplicates
tuple1 = ("apple", "banana", "cherry")

# Set - Unordered, Unchangeable, No Duplicates
set1 = {"apple", "banana", "cherry"}

# Dictionary - Ordered, Changeable, No Duplicates
dict1 = {"name": "John", "age": 36}`,
          },
        ],
      },
    ],
  },
  /*****************************************************************************************************/
  "Python Tuples": {
    title: "Python Tuples",
    subtitle:
      "Tuples are used to store multiple items in a single variable. They are one of the 4 built-in data types in Python used to store collections of data, along with List, Set, and Dictionary.",
    Ques: [
      {
        Ques: "Creating a Tuple",
        sol1: "Tuples are created using round brackets. Here's an example of creating a simple tuple:",
        code1: [
          {
            code: `thistuple = ("apple", "banana", "cherry")
print(thistuple)`,
          },
        ],
      },
      {
        Ques: "Tuple Items - Ordered, Unchangeable, and Allow Duplicate Values",
        sol1: `Tuple items are ordered (have a defined order), unchangeable (cannot be modified), and allow duplicate values. You can access tuple items using their index (starting from 0).`,
        code1: [
          {
            code: `thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple)`,
          },
        ],
      },
      {
        Ques: "Tuple Length",
        sol1: "You can determine the length of a tuple using the len() function:",
        code1: [
          {
            code: `thistuple = ("apple", "banana", "cherry")
print(len(thistuple))`,
          },
        ],
      },
      {
        Ques: "Creating a Tuple with One Item",
        sol1: "To create a tuple with only one item, you need to add a comma after the item. Otherwise, Python won't recognize it as a tuple.",
        code1: [
          {
            code: `thistuple = ("apple",)
print(type(thistuple))  # Output: <class 'tuple'>

# NOT a tuple
thistuple = ("apple")
print(type(thistuple))  # Output: <class 'str'>`,
          },
        ],
      },
      {
        Ques: "Tuple Items - Data Types",
        sol1: "A tuple can contain items of any data type, including strings, integers, booleans, and more. A tuple can also store multiple data types in one.",
        code1: [
          {
            code: `tuple1 = ("apple", "banana", "cherry")
tuple2 = (1, 5, 7, 9, 3)
tuple3 = (True, False, False)

# A tuple can contain different data types:
tuple1 = ("abc", 34, True, 40, "male")`,
          },
        ],
      },
      {
        Ques: "What is the data type of a tuple?",
        sol1: "From Python's perspective, tuples are objects with the data type 'tuple'. You can check the type using the type() function.",
        code1: [
          {
            code: `mytuple = ("apple", "banana", "cherry")
print(type(mytuple))  # Output: <class 'tuple'>`,
          },
        ],
      },
      {
        Ques: "The tuple() Constructor",
        sol1: "You can also use the tuple() constructor to create a tuple. Here's an example:",
        code1: [
          {
            code: `thistuple = tuple(("apple", "banana", "cherry"))  # note the double round-brackets
print(thistuple)`,
          },
        ],
      },
      {
        Ques: "Python Collections (Arrays)",
        sol1: "There are four main collection data types in Python: List, Tuple, Set, and Dictionary, each with different characteristics and usage.",
        code1: [
          {
            code: `# List - Ordered, Changeable, Allows Duplicates
list1 = ["apple", "banana", "cherry"]

# Tuple - Ordered, Unchangeable, Allows Duplicates
tuple1 = ("apple", "banana", "cherry")

# Set - Unordered, Unchangeable, No Duplicates
set1 = {"apple", "banana", "cherry"}

# Dictionary - Ordered, Changeable, No Duplicates
dict1 = {"name": "John", "age": 36}`,
          },
        ],
      },
    ],
  },
  /****************************************************************************************************/
  "Python Sets": {
    title: "Python Sets",
    subtitle:
      "Sets are used to store multiple items in a single variable. A set is one of the 4 built-in data types in Python used to store collections of data, alongside List, Tuple, and Dictionary.",
    Ques: [
      {
        Ques: "Creating a Set",
        sol1: "Sets are created using curly brackets. Here's an example of creating a set:",
        code1: [
          {
            code: `thisset = {"apple", "banana", "cherry"}
print(thisset)`,
          },
        ],
      },
      {
        Ques: "Set Items - Unordered, Unchangeable, and No Duplicates",
        sol1: `Set items are unordered, unchangeable, and do not allow duplicate values. 
You cannot refer to items by index or key, and duplicate items will be automatically removed.`,
        code1: [
          {
            code: `# Duplicates will be ignored
thisset = {"apple", "banana", "cherry", "apple"}
print(thisset)  # Output will be: {"apple", "banana", "cherry"}`,

            code: `# True and 1 are considered the same in sets
thisset = {"apple", "banana", "cherry", True, 1, 2}
print(thisset)  # Output will be: {"apple", "banana", "cherry", True, 2}`,

            code: `# False and 0 are considered the same in sets
thisset = {"apple", "banana", "cherry", False, True, 0}
print(thisset)  # Output will be: {"apple", "banana", "cherry", False, True}`,
          },
        ],
      },
      {
        Ques: "Getting the Length of a Set",
        sol1: "You can use the len() function to determine how many items a set has.",
        code1: [
          {
            code: `thisset = {"apple", "banana", "cherry"}
print(len(thisset))  # Output will be: 3`,
          },
        ],
      },
      {
        Ques: "Set Items - Data Types",
        sol1: "Set items can be of any data type, and a set can even store multiple types of data in one set.",
        code1: [
          {
            code: `set1 = {"apple", "banana", "cherry"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}

# A set can contain different data types:
set1 = {"abc", 34, True, 40, "male"}`,
          },
        ],
      },
      {
        Ques: "What is the data type of a set?",
        sol1: "From Python's perspective, sets are defined as objects with the data type 'set'. You can use the type() function to check the data type.",
        code1: [
          {
            code: `myset = {"apple", "banana", "cherry"}
print(type(myset))  # Output: <class 'set'>`,
          },
        ],
      },
      {
        Ques: "The set() Constructor",
        sol1: "You can also use the set() constructor to create a set. Here's an example:",
        code1: [
          {
            code: `thisset = set(("apple", "banana", "cherry"))  # note the double round-brackets
print(thisset)`,
          },
        ],
      },
      {
        Ques: "Python Collections (Arrays)",
        sol1: "Python provides several collection data types: List, Tuple, Set, and Dictionary. Each of these types has different properties.",
        code1: [
          {
            code: `# List - Ordered, Changeable, Allows Duplicates
list1 = ["apple", "banana", "cherry"]

# Tuple - Ordered, Unchangeable, Allows Duplicates
tuple1 = ("apple", "banana", "cherry")

# Set - Unordered, Unchangeable*, No Duplicates
set1 = {"apple", "banana", "cherry"}

# Dictionary - Ordered**, Changeable, No Duplicates
dict1 = {"name": "John", "age": 36}`,
          },
        ],
      },
    ],
  },
  /*****************************************************************************************************/
  "Python Dictionaries": {
    title: "Python Dictionaries",
    subtitle:
      "Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is ordered*, changeable, and does not allow duplicates.",
    Ques: [
      {
        Ques: "Creating and Printing a Dictionary",
        sol1: "Dictionaries are created using curly brackets with keys and values. Here's an example of creating and printing a dictionary:",
        code1: [
          {
            code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)`,
          },
        ],
      },
      {
        Ques: "Accessing Dictionary Items",
        sol1: "Dictionary items are ordered, changeable, and can be referred to by using the key name. Here's how you can access values by key:",
        code1: [
          {
            code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])  # Output: Ford`,
          },
        ],
      },
      {
        Ques: "Ordered or Unordered?",
        sol1: "As of Python 3.7, dictionaries are ordered, meaning that the items have a defined order. In Python 3.6 and earlier, dictionaries were unordered.",
        code1: [
          {
            code: `# In Python 3.7 and later, dictionary order is maintained
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict)`,
          },
        ],
      },
      {
        Ques: "Changeable",
        sol1: "Dictionaries are changeable, meaning that you can change, add, or remove items after the dictionary has been created.",
        code1: [
          {
            code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
thisdict["year"] = 2020  # Modify value
thisdict["color"] = "red"  # Add new item
print(thisdict)`,
          },
        ],
      },
      {
        Ques: "Duplicates Not Allowed",
        sol1: "Dictionaries cannot have two items with the same key. If you assign a new value to an existing key, it will overwrite the previous value.",
        code1: [
          {
            code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964,
  "year": 2020  # Duplicates are overwritten
}
print(thisdict)`, // Output will be: { "brand": "Ford", "model": "Mustang", "year": 2020 }
          },
        ],
      },
      {
        Ques: "Getting the Length of a Dictionary",
        sol1: "To determine how many items a dictionary has, you can use the len() function.",
        code1: [
          {
            code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(len(thisdict))  # Output: 3`,
          },
        ],
      },
      {
        Ques: "Dictionary Items - Data Types",
        sol1: "The values in dictionary items can be of any data type. A dictionary can store strings, integers, booleans, lists, and more.",
        code1: [
          {
            code: `thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
print(thisdict)`,
          },
        ],
      },
      {
        Ques: "What is the Data Type of a Dictionary?",
        sol1: "From Python's perspective, dictionaries are defined as objects with the data type 'dict'. You can use the type() function to check the data type of a dictionary.",
        code1: [
          {
            code: `thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(type(thisdict))  # Output: <class 'dict'>`,
          },
        ],
      },
      {
        Ques: "The dict() Constructor",
        sol1: "It is possible to use the dict() constructor to create a dictionary. Here's how to do it:",
        code1: [
          {
            code: `thisdict = dict(name="John", age=36, country="Norway")
print(thisdict)`,
          },
        ],
      },
      {
        Ques: "Python Collections (Arrays)",
        sol1: "There are four collection data types in Python: List, Tuple, Set, and Dictionary. Each has unique properties:",
        code1: [
          {
            code: `# List - Ordered, Changeable, Allows Duplicates
list1 = ["apple", "banana", "cherry"]

# Tuple - Ordered, Unchangeable, Allows Duplicates
tuple1 = ("apple", "banana", "cherry")

# Set - Unordered, Unchangeable*, No Duplicates
set1 = {"apple", "banana", "cherry"}

# Dictionary - Ordered**, Changeable, No Duplicates
dict1 = {"name": "John", "age": 36, "country": "Norway"}`,
          },
        ],
      },
    ],
  },
  /****************************************************************************************************/

  "Python If....Else": {
    title: "Python If ... Else",
    subtitle: "Python Conditions and If statements",
    Ques: [
      {
        Ques: "Python Conditions and If statements",
        sol1: "Python supports the usual logical conditions from mathematics:\n\nEquals: a == b\nNot Equals: a != b\nLess than: a < b\nLess than or equal to: a <= b\nGreater than: a > b\nGreater than or equal to: a >= b\nThese conditions can be used in several ways, most commonly in 'if statements' and loops.\n\nAn 'if statement' is written by using the if keyword.",
        code1: [
          {
            code: "a = 33\nb = 200\nif b > a:\n  print('b is greater than a')",
          },
        ],
      },
      {
        Ques: "Indentation",
        sol1: "Python relies on indentation (whitespace at the beginning of a line) to define scope in the code. Other programming languages often use curly-brackets for this purpose.",
        code1: [
          {
            code: "a = 33\nb = 200\nif b > a:\nprint('b is greater than a')  # you will get an error",
          },
        ],
      },
      {
        Ques: "Elif",
        sol1: "The elif keyword is Python's way of saying 'if the previous conditions were not true, then try this condition'.",
        code1: [
          {
            code: "a = 33\nb = 33\nif b > a:\n  print('b is greater than a')\nelif a == b:\n  print('a and b are equal')",
          },
        ],
      },
      {
        Ques: "Else",
        sol1: "The else keyword catches anything which isn't caught by the preceding conditions.",
        code1: [
          {
            code: "a = 200\nb = 33\nif b > a:\n  print('b is greater than a')\nelif a == b:\n  print('a and b are equal')\nelse:\n  print('a is greater than b')",
          },
        ],
      },
      {
        Ques: "You can also have an else without the elif",
        sol1: "",
        code1: [
          {
            code: "a = 200\nb = 33\nif b > a:\n  print('b is greater than a')\nelse:\n  print('b is not greater than a')",
          },
        ],
      },
      {
        Ques: "Short Hand If",
        sol1: "If you have only one statement to execute, you can put it on the same line as the if statement.",
        code1: [
          {
            code: "if a > b: print('a is greater than b')",
          },
        ],
      },
      {
        Ques: "Short Hand If ... Else",
        sol1: "If you have only one statement to execute, one for if, and one for else, you can put it all on the same line.",
        code1: [
          {
            code: "a = 2\nb = 330\nprint('A') if a > b else print('B')",
          },
        ],
      },
      {
        Ques: "You can also have multiple else statements on the same line",
        sol1: "",
        code1: [
          {
            code: "a = 330\nb = 330\nprint('A') if a > b else print('=') if a == b else print('B')",
          },
        ],
      },
      {
        Ques: "And",
        sol1: "The and keyword is a logical operator, and is used to combine conditional statements.",
        code1: [
          {
            code: "a = 200\nb = 33\nc = 500\nif a > b and c > a:\n  print('Both conditions are True')",
          },
        ],
      },
      {
        Ques: "Or",
        sol1: "The or keyword is a logical operator, and is used to combine conditional statements.",
        code1: [
          {
            code: "a = 200\nb = 33\nc = 500\nif a > b or a > c:\n  print('At least one of the conditions is True')",
          },
        ],
      },
      {
        Ques: "Not",
        sol1: "The not keyword is a logical operator, and is used to reverse the result of the conditional statement.",
        code1: [
          {
            code: "a = 33\nb = 200\nif not a > b:\n  print('a is NOT greater than b')",
          },
        ],
      },
      {
        Ques: "Nested If",
        sol1: "You can have if statements inside if statements, this is called nested if statements.",
        code1: [
          {
            code: "x = 41\nif x > 10:\n  print('Above ten,')\n  if x > 20:\n    print('and also above 20!')\n  else:\n    print('but not above 20.')",
          },
        ],
      },
      {
        Ques: "The pass Statement",
        sol1: "if statements cannot be empty, but if you for some reason have an if statement with no content, put in the pass statement to avoid getting an error.",
        code1: [
          {
            code: "a = 33\nb = 200\nif b > a:\n  pass",
          },
        ],
      },
    ],
  },
/*****************************************************************************************************/

};