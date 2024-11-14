const PythonData = {
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
        code1: [
          {
            code: "C:\\Users\\Your Name> python --version",
          },
        ],
      },
      {
        Ques: "",
        sol1: "To check if you have python installed on a Linux or Mac, then on linux open the command line or on Mac open the Terminal and type:",
        code1: [
          {
            code: "python --version",
          },
        ],
      },
      {
        Ques: "",
        sol1: "If you find that you do not have Python installed on your computer, then you can download it for free from the following website: https://www.python.org/",
        code1: [],
      },

      {
        Ques: "Python Quickstart",
        sol1: "Python is an interpreted programming language, meaning that you write Python (.py) files in a text editor and then run those files in the Python interpreter to be executed",
        code1: [],
      },
      {
        Ques: "",
        sol1: "The way to run a python file is like this on the command line:",
        code1: [
          {
            code: `C:\Users\Your Name>python helloworld.py`,
          },
        ],
      },
      {
        Ques: "",
        sol1: `Where "helloworld.py" is the name of your python file.
    
    Let's write our first Python file, called helloworld.py, which can be done in any text editor.`,
        code1: [
          {
            code: `print("Hello, World!")`,
          },
        ],
      },
      {
        Ques: "",
        sol1: `Simple as that. Save your file. Open your command line, navigate to the directory where you saved your file, and run:`,
        code1: [
          {
            code: `C:\Users\Your Name>python helloworld.py`,
          },
        ],
      },
      {
        Ques: "",
        sol1: `The output should read:`,
        code1: [
          {
            code: `Hello, World!`,
          },
        ],
      },
      {
        Ques: "",
        sol1: `Congratulations, you have written and executed your first Python program.`,
        code1: [],
      },
      {
        Ques: "Python Editor",
        sol1: "We provide an online Python editor where you can execute Python code directly in your browser and view the results immediately. Try it by visiting the Python tutorial page and using the editor to run code examples, like printing 'Hello, World!'",
        code1: [
          {
            code: "print('Hello, World!')",
          },
        ],
      },
      {
        Ques: "Python Version",
        sol1: "You can check the Python version of the editor or your local Python installation by importing the `sys` module and printing the version:",
        code1: [
          {
            code: "import sys\nprint(sys.version)",
          },
        ],
      },
      {
        Ques: "The Python Command Line",
        sol1: "To test a short amount of code in python sometimes it is quickest and easiest not to write the code in a file. This is made possible because Python can be run as a command line itself.",
        code1: [
          {
            code: ">>> exit()",
          },
        ],
      },
      {
        Ques: "",
        sol1: "Type the following on the Windows, Mac or Linux command line:",
        code1: [
          {
            code: `C:\Users\Your Name>python`,
          },
        ],
      },
      {
        Ques: "",
        sol1: `Or, if the "python" command did not work, you can try "py":`,
        code1: [
          {
            code: `C:\Users\Your Name>py`,
          },
        ],
      },
      {
        Ques: "",
        sol1: `From there you can write any python, including our hello world example from earlier in the tutorial:`,
        code1: [
          {
            code: `C:\Users\Your Name>python
    Python 3.6.4 (v3.6.4:d48eceb, Dec 19 2017, 06:04:45) [MSC v.1900 32 bit (Intel)] on win32
    Type "help", "copyright", "credits" or "license" for more information.
    >>> print("Hello, World!")`,
          },
        ],
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
    Hello, World!`,
          },
        ],
      },
      {
        Ques: "",
        sol1: `Whenever you are done in the python command line, you can simply type the following to quit the python command line interface:`,
        code1: [
          {
            code: `exit()`,
          },
        ],
      },
    ],
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
            code: "print(10 + 5)",
          },
        ],
      },
      {
        Ques: "Python Arithmetic Operators",
        sol1: "Arithmetic operators are used with numeric values to perform common mathematical operations.",
        code1: [
          {
            code: "x + y  # Addition",
          },
          {
            code: "x - y  # Subtraction",
          },
          {
            code: "x * y  # Multiplication",
          },
          {
            code: "x / y  # Division",
          },
          {
            code: "x % y  # Modulus",
          },
          {
            code: "x ** y  # Exponentiation",
          },
          {
            code: "x // y  # Floor division",
          },
        ],
      },
      {
        Ques: "Python Assignment Operators",
        sol1: "Assignment operators are used to assign values to variables.",
        code1: [
          {
            code: "x = 5  # x gets the value 5",
          },
          {
            code: "x += 3  # x = x + 3",
          },
          {
            code: "x -= 3  # x = x - 3",
          },
          {
            code: "x *= 3  # x = x * 3",
          },
          {
            code: "x /= 3  # x = x / 3",
          },
          {
            code: "x %= 3  # x = x % 3",
          },
          {
            code: "x //= 3  # x = x // 3",
          },
          {
            code: "x **= 3  # x = x ** 3",
          },
          {
            code: "x &= 3  # x = x & 3",
          },
          {
            code: "x |= 3  # x = x | 3",
          },
          {
            code: "x ^= 3  # x = x ^ 3",
          },
          {
            code: "x >>= 3  # x = x >> 3",
          },
          {
            code: "x <<= 3  # x = x << 3",
          },
          {
            code: "x := 3  # Assignment expression",
          },
        ],
      },
      {
        Ques: "Python Comparison Operators",
        sol1: "Comparison operators are used to compare two values.",
        code1: [
          {
            code: "x == y  # Equal",
          },
          {
            code: "x != y  # Not equal",
          },
          {
            code: "x > y  # Greater than",
          },
          {
            code: "x < y  # Less than",
          },
          {
            code: "x >= y  # Greater than or equal to",
          },
          {
            code: "x <= y  # Less than or equal to",
          },
        ],
      },
      {
        Ques: "Python Logical Operators",
        sol1: "Logical operators are used to combine conditional statements.",
        code1: [
          {
            code: "x < 5 and x < 10  # Returns True if both conditions are true",
          },
          {
            code: "x < 5 or x < 4  # Returns True if at least one condition is true",
          },
          {
            code: "not(x < 5 and x < 10)  # Returns False if both conditions are true",
          },
        ],
      },
      {
        Ques: "Python Identity Operators",
        sol1: "Identity operators are used to compare the objects, not if they are equal, but if they are actually the same object, with the same memory location.",
        code1: [
          {
            code: "x is y  # Returns True if x and y are the same object",
          },
          {
            code: "x is not y  # Returns True if x and y are not the same object",
          },
        ],
      },
      {
        Ques: "Python Membership Operators",
        sol1: "Membership operators are used to test if a sequence is present in an object.",
        code1: [
          {
            code: "x in y  # Returns True if x is in y",
          },
          {
            code: "x not in y  # Returns True if x is not in y",
          },
        ],
      },
      {
        Ques: "Python Bitwise Operators",
        sol1: "Bitwise operators are used to compare (binary) numbers.",
        code1: [
          {
            code: "x & y  # Bitwise AND",
          },
          {
            code: "x | y  # Bitwise OR",
          },
          {
            code: "x ^ y  # Bitwise XOR",
          },
          {
            code: "~x  # Bitwise NOT",
          },
          {
            code: "x << 2  # Bitwise left shift",
          },
          {
            code: "x >> 2  # Bitwise right shift",
          },
        ],
      },
      {
        Ques: "Operator Precedence",
        sol1: "Operator precedence describes the order in which operations are performed. Parentheses have the highest precedence, followed by exponentiation, unary operations, and so on.",
        code1: [
          {
            code: "print((6 + 3) - (6 + 3))  # Parentheses first",
          },
          {
            code: "print(100 + 5 * 3)  # Multiplication before addition",
          },
        ],
      },
      {
        Ques: "Operator Precedence Table",
        sol1: "When operators have the same precedence, they are evaluated from left to right. Here is the order of precedence, starting from the highest.",
        code1: [],
      },
      {
        Ques: "Example of Left-to-Right Evaluation",
        sol1: "Addition and subtraction have the same precedence, so they are evaluated from left to right.",
        code1: [
          {
            code: "print(5 + 4 - 7 + 3)",
          },
        ],
      },
    ],
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
  "Python While Loops": {
    title: "Python While Loops",
    subtitle:
      "Python has two primitive loop commands: while loops and for loops.",
    Ques: [
      {
        Ques: "The while Loop",
        sol1: "With the while loop we can execute a set of statements as long as a condition is true.",
        code1: [
          {
            code: `i = 1
  while i < 6:
    print(i)
    i += 1`,
          },
        ],
        sol2: "Note: remember to increment i, or else the loop will continue forever.",
      },
      {
        Ques: "The break Statement",
        sol1: "With the break statement we can stop the loop even if the while condition is true.",
        code1: [
          {
            code: `i = 1
  while i < 6:
    print(i)
    if i == 3:
      break
    i += 1`,
          },
        ],
      },
      {
        Ques: "The continue Statement",
        sol1: "With the continue statement we can stop the current iteration, and continue with the next.",
        code1: [
          {
            code: `i = 0
  while i < 6:
    i += 1
    if i == 3:
      continue
    print(i)`,
          },
        ],
      },
      {
        Ques: "The else Statement",
        sol1: "With the else statement we can run a block of code once when the condition no longer is true.",
        code1: [
          {
            code: `i = 1
  while i < 6:
    print(i)
    i += 1
  else:
    print("i is no longer less than 6")`,
          },
        ],
      },
    ],
  },
  /***************************************************************************************************/
  "Python For Loops": {
    title: "Python For Loops",
    subtitle:
      "A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).",
    Ques: [
      {
        Ques: "The for Loop",
        sol1: "A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).",
        sol2: "This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.",
        sol3: "With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.",
        code1: [
          {
            code: `fruits = ["apple", "banana", "cherry"]
  for x in fruits:
    print(x)`,
          },
        ],
        sol4: "The for loop does not require an indexing variable to set beforehand.",
      },
      {
        Ques: "Looping Through a String",
        sol1: "Even strings are iterable objects, they contain a sequence of characters.",
        code1: [
          {
            code: `for x in "banana":
    print(x)`,
          },
        ],
      },
      {
        Ques: "The break Statement",
        sol1: "With the break statement we can stop the loop before it has looped through all the items.",
        code1: [
          {
            code: `fruits = ["apple", "banana", "cherry"]
  for x in fruits:
    print(x)
    if x == "banana":
      break`,
          },
        ],
        sol2: "Exit the loop when x is 'banana'.",
      },
      {
        Ques: "Example with break Statement",
        sol1: "Exit the loop when x is 'banana', but this time the break comes before the print.",
        code1: [
          {
            code: `fruits = ["apple", "banana", "cherry"]
  for x in fruits:
    if x == "banana":
      break
    print(x)`,
          },
        ],
      },
      {
        Ques: "The continue Statement",
        sol1: "With the continue statement we can stop the current iteration of the loop, and continue with the next.",
        code1: [
          {
            code: `fruits = ["apple", "banana", "cherry"]
  for x in fruits:
    if x == "banana":
      continue
    print(x)`,
          },
        ],
        sol2: "Do not print 'banana'.",
      },
      {
        Ques: "The range() Function",
        sol1: "To loop through a set of code a specified number of times, we can use the range() function.",
        sol2: "The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.",
        code1: [
          {
            code: `for x in range(6):
    print(x)`,
          },
        ],
        sol3: "Note that range(6) is not the values of 0 to 6, but the values 0 to 5.",
      },
      {
        Ques: "Using the start parameter in range()",
        sol1: "The range() function defaults to 0 as a starting value, however it is possible to specify the starting value by adding a parameter: range(2, 6), which means values from 2 to 6 (but not including 6).",
        code1: [
          {
            code: `for x in range(2, 6):
    print(x)`,
          },
        ],
      },
      {
        Ques: "Increment the sequence with 3 (default is 1)",
        sol1: "The range() function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range(2, 30, 3).",
        code1: [
          {
            code: `for x in range(2, 30, 3):
    print(x)`,
          },
        ],
      },
      {
        Ques: "Else in For Loop",
        sol1: "The else keyword in a for loop specifies a block of code to be executed when the loop is finished.",
        code1: [
          {
            code: `for x in range(6):
    print(x)
  else:
    print("Finally finished!")`,
          },
        ],
        sol2: "Note: The else block will NOT be executed if the loop is stopped by a break statement.",
      },
      {
        Ques: "Example with break and else",
        sol1: "Break the loop when x is 3, and see what happens with the else block.",
        code1: [
          {
            code: `for x in range(6):
    if x == 3: break
    print(x)
  else:
    print("Finally finished!")`,
          },
        ],
      },
      {
        Ques: "Nested Loops",
        sol1: "A nested loop is a loop inside a loop.",
        sol2: "The 'inner loop' will be executed one time for each iteration of the 'outer loop'.",
        code1: [
          {
            code: `adj = ["red", "big", "tasty"]
  fruits = ["apple", "banana", "cherry"]
  
  for x in adj:
    for y in fruits:
      print(x, y)`,
          },
        ],
      },
      {
        Ques: "The pass Statement",
        sol1: "For loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.",
        code1: [
          {
            code: `for x in [0, 1, 2]:
    pass`,
          },
        ],
      },
    ],
  },
  /****************************************************************************************************/
  "Python Functions": {
    title: "Python Functions",
    subtitle:
      "A function is a block of code which only runs when it is called.",
    Ques: [
      {
        Ques: "Creating a Function",
        sol1: "In Python a function is defined using the def keyword:",
        code1: [
          {
            code: `def my_function():
    print("Hello from a function")`,
          },
        ],
      },
      {
        Ques: "Calling a Function",
        sol1: "To call a function, use the function name followed by parenthesis:",
        code1: [
          {
            code: `def my_function():
    print("Hello from a function")
  
  my_function()`,
          },
        ],
      },
      {
        Ques: "Arguments",
        sol1: "Information can be passed into functions as arguments.",
        sol2: "Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.",
        sol3: "The following example has a function with one argument (fname). When the function is called, we pass along a first name, which is used inside the function to print the full name:",
        code1: [
          {
            code: `def my_function(fname):
    print(fname + " Refsnes")
  
  my_function("Emil")
  my_function("Tobias")
  my_function("Linus")`,
          },
        ],
      },
      {
        Ques: "Arguments are often shortened to args in Python documentations.",
        sol1: "The terms parameter and argument can be used for the same thing: information that are passed into a function.",
        sol2: "From a function's perspective:",
        sol3: "A parameter is the variable listed inside the parentheses in the function definition.",
        sol4: "An argument is the value that is sent to the function when it is called.",
      },
      {
        Ques: "Number of Arguments",
        sol1: "By default, a function must be called with the correct number of arguments. Meaning that if your function expects 2 arguments, you have to call the function with 2 arguments, not more, and not less.",
        code1: [
          {
            code: `def my_function(fname, lname):
    print(fname + " " + lname)
  
  my_function("Emil", "Refsnes")`,
          },
        ],
        sol2: "If you try to call the function with 1 or 3 arguments, you will get an error:",
        code2: [
          {
            code: `def my_function(fname, lname):
    print(fname + " " + lname)
  
  my_function("Emil")`,
          },
        ],
      },
      {
        Ques: "Arbitrary Arguments, *args",
        sol1: "If you do not know how many arguments that will be passed into your function, add a * before the parameter name in the function definition.",
        sol2: "This way the function will receive a tuple of arguments, and can access the items accordingly:",
        code1: [
          {
            code: `def my_function(*kids):
    print("The youngest child is " + kids[2])
  
  my_function("Emil", "Tobias", "Linus")`,
          },
        ],
      },
      {
        Ques: "Keyword Arguments",
        sol1: "You can also send arguments with the key = value syntax.",
        sol2: "This way the order of the arguments does not matter.",
        code1: [
          {
            code: `def my_function(child3, child2, child1):
    print("The youngest child is " + child3)
  
  my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")`,
          },
        ],
      },
      {
        Ques: "Arbitrary Keyword Arguments, **kwargs",
        sol1: "If you do not know how many keyword arguments that will be passed into your function, add two asterisk: ** before the parameter name in the function definition.",
        sol2: "This way the function will receive a dictionary of arguments, and can access the items accordingly:",
        code1: [
          {
            code: `def my_function(**kid):
    print("His last name is " + kid["lname"])
  
  my_function(fname = "Tobias", lname = "Refsnes")`,
          },
        ],
      },
      {
        Ques: "Default Parameter Value",
        sol1: "The following example shows how to use a default parameter value.",
        sol2: "If we call the function without argument, it uses the default value:",
        code1: [
          {
            code: `def my_function(country = "Norway"):
    print("I am from " + country)
  
  my_function("Sweden")
  my_function("India")
  my_function()
  my_function("Brazil")`,
          },
        ],
      },
      {
        Ques: "Passing a List as an Argument",
        sol1: "You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.",
        sol2: "E.g. if you send a List as an argument, it will still be a List when it reaches the function:",
        code1: [
          {
            code: `def my_function(food):
    for x in food:
      print(x)
  
  fruits = ["apple", "banana", "cherry"]
  
  my_function(fruits)`,
          },
        ],
      },
      {
        Ques: "Return Values",
        sol1: "To let a function return a value, use the return statement:",
        code1: [
          {
            code: `def my_function(x):
    return 5 * x
  
  print(my_function(3))
  print(my_function(5))
  print(my_function(9))`,
          },
        ],
      },
      {
        Ques: "The pass Statement",
        sol1: "Function definitions cannot be empty, but if you for some reason have a function definition with no content, put in the pass statement to avoid getting an error.",
        code1: [
          {
            code: `def myfunction():
    pass`,
          },
        ],
      },
      {
        Ques: "Positional-Only Arguments",
        sol1: "You can specify that a function can have ONLY positional arguments, or ONLY keyword arguments.",
        sol2: "To specify that a function can have only positional arguments, add , / after the arguments:",
        code1: [
          {
            code: `def my_function(x, /):
    print(x)
  
  my_function(3)`,
          },
        ],
        sol3: "Without the , / you are actually allowed to use keyword arguments even if the function expects positional arguments:",
        code2: [
          {
            code: `def my_function(x):
    print(x)
  
  my_function(x = 3)`,
          },
        ],
        sol4: "But when adding the , / you will get an error if you try to send a keyword argument:",
        code3: [
          {
            code: `def my_function(x, /):
    print(x)
  
  my_function(x = 3)`,
          },
        ],
      },
      {
        Ques: "Keyword-Only Arguments",
        sol1: "To specify that a function can have only keyword arguments, add *, before the arguments:",
        code1: [
          {
            code: `def my_function(*, x):
    print(x)
  
  my_function(x = 3)`,
          },
        ],
        sol2: "Without the *, you are allowed to use positional arguments even if the function expects keyword arguments:",
        code2: [
          {
            code: `def my_function(x):
    print(x)
  
  my_function(3)`,
          },
        ],
        sol3: "But with the *, you will get an error if you try to send a positional argument:",
        code3: [
          {
            code: `def my_function(*, x):
    print(x)
  
  my_function(3)`,
          },
        ],
      },
      {
        Ques: "Combine Positional-Only and Keyword-Only",
        sol1: "You can combine the two argument types in the same function.",
        sol2: "Any argument before the / , are positional-only, and any argument after the *, are keyword-only.",
        code1: [
          {
            code: `def my_function(a, b, /, *, c, d):
    print(a + b + c + d)
  
  my_function(5, 6, c = 7, d = 8)`,
          },
        ],
      },
      {
        Ques: "Recursion",
        sol1: "Python also accepts function recursion, which means a defined function can call itself.",
        sol2: "Recursion is a common mathematical and programming concept. It means that a function calls itself. This has the benefit of meaning that you can loop through data to reach a result.",
        sol3: "The developer should be very careful with recursion as it can be quite easy to slip into writing a function which never terminates, or one that uses excess amounts of memory or processor power. However, when written correctly recursion can be a very efficient and mathematically-elegant approach to programming.",
        sol4: "In this example, tri_recursion() is a function that we have defined to call itself ('recurse'). We use the k variable as the data, which decrements (-1) every time we recurse. The recursion ends when the condition is not greater than 0 (i.e. when it is 0).",
        code1: [
          {
            code: `def tri_recursion(k):
    if(k > 0):
      result = k + tri_recursion(k - 1)
      print(result)
    else:
      result = 0
    return result
  
  print("Recursion Example Results:")
  tri_recursion(6)`,
          },
        ],
      },
    ],
  },
  /****************************************************************************************************/
  "Python Lambda": {
    title: "Python Lambda",
    subtitle: "A lambda function is a small anonymous function.",
    Ques: [
      {
        Ques: "Syntax",
        sol1: "lambda arguments : expression",
        sol2: "The expression is executed and the result is returned:",
        code1: [
          {
            code: `x = lambda a : a + 10
  print(x(5))`,
          },
        ],
      },
      {
        Ques: "Lambda functions can take any number of arguments:",
        sol1: "Multiply argument a with argument b and return the result:",
        code1: [
          {
            code: `x = lambda a, b : a * b
  print(x(5, 6))`,
          },
        ],
      },
      {
        Ques: "Example",
        sol1: "Summarize argument a, b, and c and return the result:",
        code1: [
          {
            code: `x = lambda a, b, c : a + b + c
  print(x(5, 6, 2))`,
          },
        ],
      },
      {
        Ques: "Why Use Lambda Functions?",
        sol1: "The power of lambda is better shown when you use them as an anonymous function inside another function.",
        sol2: "Say you have a function definition that takes one argument, and that argument will be multiplied with an unknown number:",
        code1: [
          {
            code: `def myfunc(n):
    return lambda a : a * n`,
          },
        ],
        sol3: "Use that function definition to make a function that always doubles the number you send in:",
        code2: [
          {
            code: `mydoubler = myfunc(2)
  
  print(mydoubler(11))`,
          },
        ],
        sol4: "Or, use the same function definition to make a function that always triples the number you send in:",
        code3: [
          {
            code: `mytripler = myfunc(3)
  
  print(mytripler(11))`,
          },
        ],
        sol5: "Or, use the same function definition to make both functions, in the same program:",
        code4: [
          {
            code: `mydoubler = myfunc(2)
  mytripler = myfunc(3)
  
  print(mydoubler(11))
  print(mytripler(11))`,
          },
        ],
      },
      {
        Ques: "Use lambda functions when an anonymous function is required for a short period of time.",
      },
    ],
  },
  /***************************************************************************************************/
  "Python Arrays": {
    title: "Python Arrays",
    subtitle:
      "Note: Python does not have built-in support for Arrays, but Python Lists can be used instead.",
    Ques: [
      {
        Ques: "Arrays",
        sol1: "Note: This page shows you how to use LISTS as ARRAYS, however, to work with arrays in Python you will have to import a library, like the NumPy library.",
        sol2: "Arrays are used to store multiple values in one single variable:",
        code1: [
          {
            code: `cars = ["Ford", "Volvo", "BMW"]`,
          },
        ],
      },
      {
        Ques: "What is an Array?",
        sol1: "An array is a special variable, which can hold more than one value at a time.",
        sol2: "If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:",
        code1: [
          {
            code: `car1 = "Ford"
  car2 = "Volvo"
  car3 = "BMW"`,
          },
        ],
        sol3: "However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?",
        sol4: "The solution is an array!",
        sol5: "An array can hold many values under a single name, and you can access the values by referring to an index number.",
      },
      {
        Ques: "Access the Elements of an Array",
        sol1: "You refer to an array element by referring to the index number.",
        code1: [
          {
            code: `x = cars[0]`,
          },
        ],
        sol2: "Modify the value of the first array item:",
        code2: [
          {
            code: `cars[0] = "Toyota"`,
          },
        ],
      },
      {
        Ques: "The Length of an Array",
        sol1: "Use the len() method to return the length of an array (the number of elements in an array).",
        code1: [
          {
            code: `x = len(cars)`,
          },
        ],
        sol2: "Note: The length of an array is always one more than the highest array index.",
      },
      {
        Ques: "Looping Array Elements",
        sol1: "You can use the for in loop to loop through all the elements of an array.",
        code1: [
          {
            code: `for x in cars:
    print(x)`,
          },
        ],
      },
      {
        Ques: "Adding Array Elements",
        sol1: "You can use the append() method to add an element to an array.",
        code1: [
          {
            code: `cars.append("Honda")`,
          },
        ],
      },
      {
        Ques: "Removing Array Elements",
        sol1: "You can use the pop() method to remove an element from the array.",
        code1: [
          {
            code: `cars.pop(1)`,
          },
        ],
        sol2: "You can also use the remove() method to remove an element from the array.",
        code2: [
          {
            code: `cars.remove("Volvo")`,
          },
        ],
        sol3: "Note: The list's remove() method only removes the first occurrence of the specified value.",
      },
      {
        Ques: "Array Methods",
        sol1: "Python has a set of built-in methods that you can use on lists/arrays.",
        sol2: "Method Descriptions:",
        code: [
          {
            code: "cars.append('Toyota')  # Adds an element at the end of the list",
          },
          {
            code: "cars.clear()  # Removes all the elements from the list",
          },
          {
            code: "cars_copy = cars.copy()  # Returns a copy of the list",
          },
          {
            code: "count = cars.count('Volvo')  # Returns the number of elements with the specified value",
          },
          {
            code: "cars.extend(other_cars)  # Add the elements of a list (or any iterable) to the end of the current list",
          },
          {
            code: "index = cars.index('Volvo')  # Returns the index of the first element with the specified value",
          },
          {
            code: "cars.insert(2, 'Ford')  # Adds an element at the specified position",
          },
          {
            code: "cars.pop(1)  # Removes the element at the specified position",
          },
          {
            code: "cars.remove('Volvo')  # Removes the first item with the specified value",
          },
          {
            code: "cars.reverse()  # Reverses the order of the list",
          },
          {
            code: "cars.sort()  # Sorts the list",
          },
        ],
      },
    ],
  },
  /************************************************************************************************* */
  "Python Classes and Objects": {
    title: "Python Classes and Objects",
    subtitle:
      'Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods. A Class is like an object constructor, or a "blueprint" for creating objects.',
    Ques: [
      {
        Ques: "Create a Class",
        sol1: "To create a class, use the keyword <code>class</code>:",
        code1: [
          {
            code: `class MyClass:\n  x = 5`,
          },
        ],
      },
      {
        Ques: "Create Object",
        sol1: "Now we can use the class named MyClass to create objects:",
        sol2: "Example: Create an object named <code>p1</code>, and print the value of <code>x</code>:",
        code1: [
          {
            code: `p1 = MyClass()\nprint(p1.x)`,
          },
        ],
      },
      {
        Ques: "The __init__() Function",
        sol1: "To understand the meaning of classes, we need to understand the built-in <code>__init__()</code> function. This function is always executed when the class is being initiated.",
        sol2: "Use the <code>__init__()</code> function to assign values to object properties, or perform other operations necessary when the object is being created.",
        sol3: "Example: Create a class named <code>Person</code>, and use the <code>__init__()</code> function to assign values for <code>name</code> and <code>age</code>:",
        code1: [
          {
            code: `class Person:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n\np1 = Person("John", 36)\n\nprint(p1.name)\nprint(p1.age)`,
          },
        ],
      },
      {
        Ques: "The __str__() Function",
        sol1: "The <code>__str__()</code> function controls what should be returned when the class object is represented as a string.",
        sol2: "If the <code>__str__()</code> function is not set, the string representation of the object is returned.",
        sol3: "Example: The string representation of an object WITHOUT the <code>__str__()</code> function:",
        code1: [
          {
            code: `class Person:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n\np1 = Person("John", 36)\n\nprint(p1)`,
          },
        ],
        sol4: "Example: The string representation of an object WITH the <code>__str__()</code> function:",
        code2: [
          {
            code: `class Person:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n\n  def __str__(self):\n    return f"{self.name}({self.age})"\n\np1 = Person("John", 36)\n\nprint(p1)`,
          },
        ],
      },
      {
        Ques: "Object Methods",
        sol1: "Objects can also contain methods. Methods in objects are functions that belong to the object.",
        sol2: "Let us create a method in the <code>Person</code> class:",
        code1: [
          {
            code: `class Person:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n\n  def myfunc(self):\n    print("Hello my name is " + self.name)\n\np1 = Person("John", 36)\np1.myfunc()`,
          },
        ],
      },
      {
        Ques: "The self Parameter",
        sol1: "The <code>self</code> parameter is a reference to the current instance of the class and is used to access variables that belong to the class.",
        sol2: "It does not have to be named <code>self</code>, but it has to be the first parameter of any function in the class.",
        sol3: "Example: Use the words <code>mysillyobject</code> and <code>abc</code> instead of <code>self</code>:",
        code1: [
          {
            code: `class Person:\n  def __init__(mysillyobject, name, age):\n    mysillyobject.name = name\n    mysillyobject.age = age\n\n  def myfunc(abc):\n    print("Hello my name is " + abc.name)\n\np1 = Person("John", 36)\np1.myfunc()`,
          },
        ],
      },
      {
        Ques: "Modify Object Properties",
        sol1: "You can modify properties on objects like this:",
        code1: [
          {
            code: `p1.age = 40`,
          },
        ],
      },
      {
        Ques: "Delete Object Properties",
        sol1: "You can delete properties on objects by using the <code>del</code> keyword:",
        code1: [
          {
            code: `del p1.age`,
          },
        ],
      },
      {
        Ques: "Delete Objects",
        sol1: "You can delete objects by using the <code>del</code> keyword:",
        code1: [
          {
            code: `del p1`,
          },
        ],
      },
      {
        Ques: "The pass Statement",
        sol1: "Class definitions cannot be empty, but if you for some reason have a class definition with no content, put in the <code>pass</code> statement to avoid getting an error.",
        code1: [
          {
            code: `class Person:\n  pass`,
          },
        ],
      },
    ],
  },
  /****************************************************************************************************/

  "Python Inheritance": {
    title: "Python Inheritance",
    subtitle:
      "Inheritance allows us to define a class that inherits all the methods and properties from another class. Parent class is the class being inherited from, also called base class. Child class is the class that inherits from another class, also called derived class.",
    Ques: [
      {
        Ques: "Create a Parent Class",
        sol1: "Any class can be a parent class, so the syntax is the same as creating any other class:",
        code1: [
          {
            code: `class Person:\n  def __init__(self, fname, lname):\n    self.firstname = fname\n    self.lastname = lname\n\n  def printname(self):\n    print(self.firstname, self.lastname)`,
          },
        ],
        sol2: "Use the Person class to create an object, and then execute the <code>printname</code> method:",
        code2: [
          {
            code: `x = Person("John", "Doe")\nx.printname()`,
          },
        ],
      },
      {
        Ques: "Create a Child Class",
        sol1: "To create a class that inherits the functionality from another class, send the parent class as a parameter when creating the child class:",
        code1: [
          {
            code: `class Student(Person):\n  pass`,
          },
        ],
        sol2: "Note: Use the <code>pass</code> keyword when you do not want to add any other properties or methods to the class. Now the <code>Student</code> class has the same properties and methods as the <code>Person</code> class.",
        sol3: "Example: Use the Student class to create an object, and then execute the <code>printname</code> method:",
        code2: [
          {
            code: `x = Student("Mike", "Olsen")\nx.printname()`,
          },
        ],
      },
      {
        Ques: "Add the __init__() Function",
        sol1: "So far we have created a child class that inherits the properties and methods from its parent. We want to add the <code>__init__()</code> function to the child class (instead of the <code>pass</code> keyword).",
        sol2: "Note: The <code>__init__()</code> function is called automatically every time the class is being used to create a new object.",
        sol3: "Example: Add the <code>__init__()</code> function to the Student class:",
        code1: [
          {
            code: `class Student(Person):\n  def __init__(self, fname, lname):\n    #add properties etc.`,
          },
        ],
        sol4: "When you add the <code>__init__()</code> function, the child class will no longer inherit the parent's <code>__init__()</code> function.",
        sol5: "Note: The child's <code>__init__()</code> function overrides the inheritance of the parent's <code>__init__()</code> function.",
        sol6: "To keep the inheritance of the parent's <code>__init__()</code> function, add a call to the parent's <code>__init__()</code> function:",
        code2: [
          {
            code: `class Student(Person):\n  def __init__(self, fname, lname):\n    Person.__init__(self, fname, lname)`,
          },
        ],
      },
      {
        Ques: "Use the super() Function",
        sol1: "Python also has a <code>super()</code> function that will make the child class inherit all the methods and properties from its parent:",
        code1: [
          {
            code: `class Student(Person):\n  def __init__(self, fname, lname):\n    super().__init__(fname, lname)`,
          },
        ],
        sol2: "By using the <code>super()</code> function, you do not have to use the name of the parent element. It will automatically inherit the methods and properties from its parent.",
      },
      {
        Ques: "Add Properties",
        sol1: "Example: Add a property called <code>graduationyear</code> to the Student class:",
        code1: [
          {
            code: `class Student(Person):\n  def __init__(self, fname, lname):\n    super().__init__(fname, lname)\n    self.graduationyear = 2019`,
          },
        ],
        sol2: "In the example above, the year <code>2019</code> should be a variable, and passed into the Student class when creating student objects. To do so, add another parameter in the <code>__init__()</code> function:",
        code2: [
          {
            code: `class Student(Person):\n  def __init__(self, fname, lname, year):\n    super().__init__(fname, lname)\n    self.graduationyear = year\n\nx = Student("Mike", "Olsen", 2019)`,
          },
        ],
      },
      {
        Ques: "Add Methods",
        sol1: "Example: Add a method called <code>welcome</code> to the Student class:",
        code1: [
          {
            code: `class Student(Person):\n  def __init__(self, fname, lname, year):\n    super().__init__(fname, lname)\n    self.graduationyear = year\n\n  def welcome(self):\n    print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)`,
          },
        ],
        sol2: "If you add a method in the child class with the same name as a function in the parent class, the inheritance of the parent method will be overridden.",
      },
    ],
  },
  /**************************************************************************************************/
  "Python Iterators": {
    title: "Python Iterators",
    subtitle:
      "An iterator is an object that contains a countable number of values. It can be iterated upon, meaning that you can traverse through all the values. In Python, an iterator is an object that implements the iterator protocol, consisting of the methods <code>__iter__()</code> and <code>__next__()</code>.",
    Ques: [
      {
        Ques: "Iterator vs Iterable",
        sol1: "Lists, tuples, dictionaries, and sets are all iterable objects. They are iterable containers from which you can obtain an iterator.",
        sol2: "All these objects have an <code>iter()</code> method, which is used to get an iterator:",
        code1: [
          {
            code: `mytuple = ("apple", "banana", "cherry")\nmyit = iter(mytuple)\n\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))`,
          },
        ],
        sol3: "Even strings are iterable objects and can return an iterator:",
        code2: [
          {
            code: `mystr = "banana"\nmyit = iter(mystr)\n\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))\nprint(next(myit))`,
          },
        ],
      },
      {
        Ques: "Looping Through an Iterator",
        sol1: "We can use a for loop to iterate through an iterable object. For example:",
        code1: [
          {
            code: `mytuple = ("apple", "banana", "cherry")\n\nfor x in mytuple:\n  print(x)`,
          },
        ],
        sol2: "Similarly, we can iterate through the characters of a string:",
        code2: [
          {
            code: `mystr = "banana"\n\nfor x in mystr:\n  print(x)`,
          },
        ],
        sol3: "The for loop automatically creates an iterator object and calls the <code>next()</code> method for each iteration.",
      },
      {
        Ques: "Create an Iterator",
        sol1: "To create an object or class as an iterator, you need to implement the methods <code>__iter__()</code> and <code>__next__()</code> in your object.",
        sol2: "The <code>__iter__()</code> method works similarly to the <code>__init__()</code> method in that it can do any necessary setup, but it must always return the iterator object itself.",
        sol3: "The <code>__next__()</code> method must return the next item in the sequence.",
        sol4: "Example: Create an iterator that returns numbers, starting with 1, and each sequence increases by one:",
        code1: [
          {
            code: `class MyNumbers:\n  def __iter__(self):\n    self.a = 1\n    return self\n\n  def __next__(self):\n    x = self.a\n    self.a += 1\n    return x\n\nmyclass = MyNumbers()\nmyiter = iter(myclass)\n\nprint(next(myiter))\nprint(next(myiter))\nprint(next(myiter))\nprint(next(myiter))\nprint(next(myiter))`,
          },
        ],
      },
      {
        Ques: "StopIteration",
        sol1: "The example above would continue forever if you had enough <code>next()</code> calls or if it was used in a <code>for</code> loop.",
        sol2: "To prevent the iteration from going on indefinitely, we can use the <code>StopIteration</code> statement.",
        sol3: "In the <code>__next__()</code> method, we can add a terminating condition to raise a <code>StopIteration</code> error when the iteration is done after a specified number of times.",
        sol4: "Example: Stop after 20 iterations:",
        code1: [
          {
            code: `class MyNumbers:\n  def __iter__(self):\n    self.a = 1\n    return self\n\n  def __next__(self):\n    if self.a <= 20:\n      x = self.a\n      self.a += 1\n      return x\n    else:\n      raise StopIteration\n\nmyclass = MyNumbers()\nmyiter = iter(myclass)\n\nfor x in myiter:\n  print(x)`,
          },
        ],
      },
    ],
  },
  /****************************************************************************************************/
  "Python Polymorphism": {
    title: "Python Polymorphism",
    subtitle:
      "Polymorphism means 'many forms', and in programming, it refers to methods, functions, or operators with the same name that can be executed on many objects or classes.",
    Ques: [
      {
        Ques: "Function Polymorphism",
        sol1: "An example of a Python function that can be used on different objects is the <code>len()</code> function.",
        sol2: "For strings, <code>len()</code> returns the number of characters:",
        code1: [
          {
            code: `x = "Hello World!"\n\nprint(len(x))`,
          },
        ],
        sol3: "For tuples, <code>len()</code> returns the number of items in the tuple:",
        code2: [
          {
            code: `mytuple = ("apple", "banana", "cherry")\n\nprint(len(mytuple))`,
          },
        ],
        sol4: "For dictionaries, <code>len()</code> returns the number of key/value pairs in the dictionary:",
        code3: [
          {
            code: `thisdict = {\n  "brand": "Ford",\n  "model": "Mustang",\n  "year": 1964\n}\n\nprint(len(thisdict))`,
          },
        ],
      },
      {
        Ques: "Class Polymorphism",
        sol1: "Polymorphism is commonly used in class methods, where we can have multiple classes with the same method name.",
        sol2: "For example, we have three classes: Car, Boat, and Plane, and they all have a method called <code>move()</code>:",
        code1: [
          {
            code: `class Car:\n  def __init__(self, brand, model):\n    self.brand = brand\n    self.model = model\n\n  def move(self):\n    print("Drive!")\n\nclass Boat:\n  def __init__(self, brand, model):\n    self.brand = brand\n    self.model = model\n\n  def move(self):\n    print("Sail!")\n\nclass Plane:\n  def __init__(self, brand, model):\n    self.brand = brand\n    self.model = model\n\n  def move(self):\n    print("Fly!")\n\ncar1 = Car("Ford", "Mustang")       #Create a Car class\nboat1 = Boat("Ibiza", "Touring 20") #Create a Boat class\nplane1 = Plane("Boeing", "747")     #Create a Plane class\n\nfor x in (car1, boat1, plane1):\n  x.move()`,
          },
        ],
        sol3: "Because of polymorphism, we can execute the same method for all three classes using a for loop.",
      },
      {
        Ques: "Inheritance Class Polymorphism",
        sol1: "What happens when we have child classes with the same method names? Can we still use polymorphism?",
        sol2: "Yes! By creating a parent class called <code>Vehicle</code>, and having the <code>Car</code>, <code>Boat</code>, and <code>Plane</code> classes inherit from <code>Vehicle</code>, we can override the <code>move()</code> method in the child classes.",
        code1: [
          {
            code: `class Vehicle:\n  def __init__(self, brand, model):\n    self.brand = brand\n    self.model = model\n\n  def move(self):\n    print("Move!")\n\nclass Car(Vehicle):\n  pass\n\nclass Boat(Vehicle):\n  def move(self):\n    print("Sail!")\n\nclass Plane(Vehicle):\n  def move(self):\n    print("Fly!")\n\ncar1 = Car("Ford", "Mustang") #Create a Car object\nboat1 = Boat("Ibiza", "Touring 20") #Create a Boat object\nplane1 = Plane("Boeing", "747") #Create a Plane object\n\nfor x in (car1, boat1, plane1):\n  print(x.brand)\n  print(x.model)\n  x.move()`,
          },
        ],
        sol3: "The child classes inherit the properties and methods from the parent class. In this case, the <code>Car</code> class is empty but still inherits the <code>brand</code>, <code>model</code>, and <code>move()</code> methods from the <code>Vehicle</code> class.",
        sol4: "The <code>Boat</code> and <code>Plane</code> classes override the <code>move()</code> method. Thanks to polymorphism, we can use the same method name across all classes and get the expected behavior.",
      },
    ],
  },
  /****************************************************************************************************/

  "Python Scope": {
    title: "Python Scope",
    subtitle:
      "A variable is only available from inside the region it is created. This is called scope.",
    Ques: [
      {
        Ques: "Local Scope",
        sol1: "A variable created inside a function belongs to the local scope of that function, and can only be used inside that function.",
        sol2: "Example: A variable created inside a function is available inside that function:",
        code1: [
          {
            code: `def myfunc():\n  x = 300\n  print(x)\n\nmyfunc()`,
          },
        ],
      },
      {
        Ques: "Function Inside Function",
        sol1: "As explained in the example above, the variable <code>x</code> is not available outside the function, but it is available for any function inside the function.",
        sol2: "Example: The local variable can be accessed from a function within the function:",
        code1: [
          {
            code: `def myfunc():\n  x = 300\n  def myinnerfunc():\n    print(x)\n  myinnerfunc()\n\nmyfunc()`,
          },
        ],
      },
      {
        Ques: "Global Scope",
        sol1: "A variable created in the main body of the Python code is a global variable and belongs to the global scope.",
        sol2: "Global variables are available from within any scope, both global and local.",
        sol3: "Example: A variable created outside of a function is global and can be used by anyone:",
        code1: [
          {
            code: `x = 300\n\ndef myfunc():\n  print(x)\n\nmyfunc()\n\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Naming Variables",
        sol1: "If you operate with the same variable name inside and outside of a function, Python will treat them as two separate variables. One is available in the global scope (outside the function) and the other in the local scope (inside the function).",
        sol2: "Example: The function will print the local <code>x</code>, and then the code will print the global <code>x</code>:",
        code1: [
          {
            code: `x = 300\n\ndef myfunc():\n  x = 200\n  print(x)\n\nmyfunc()\n\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Global Keyword",
        sol1: "If you need to create a global variable, but are stuck in the local scope, you can use the <code>global</code> keyword.",
        sol2: "The <code>global</code> keyword makes the variable global.",
        sol3: "Example: If you use the global keyword, the variable belongs to the global scope:",
        code1: [
          {
            code: `def myfunc():\n  global x\n  x = 300\n\nmyfunc()\n\nprint(x)`,
          },
        ],
        sol4: "Also, use the <code>global</code> keyword if you want to make a change to a global variable inside a function.",
        sol5: "Example: To change the value of a global variable inside a function, refer to the variable by using the <code>global</code> keyword:",
        code2: [
          {
            code: `x = 300\n\ndef myfunc():\n  global x\n  x = 200\n\nmyfunc()\n\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Nonlocal Keyword",
        sol1: "The <code>nonlocal</code> keyword is used to work with variables inside nested functions.",
        sol2: "The <code>nonlocal</code> keyword makes the variable belong to the outer function.",
        sol3: "Example: If you use the <code>nonlocal</code> keyword, the variable will belong to the outer function:",
        code1: [
          {
            code: `def myfunc1():\n  x = "Jane"\n  def myfunc2():\n    nonlocal x\n    x = "hello"\n  myfunc2()\n  return x\n\nprint(myfunc1())`,
          },
        ],
      },
    ],
  },
  /****************************************************************************************************/

  "Python Modules": {
    title: "Python Modules",
    subtitle: "Understanding and Using Python Modules",
    Ques: [
      {
        Ques: "What is a Module?",
        sol1: "Consider a module to be the same as a code library. A file containing a set of functions you want to include in your application.",
        code1: [],
      },
      {
        Ques: "Create a Module",
        sol1: "To create a module, save the code you want in a file with the file extension .py.",
        code1: [
          {
            code: `def greeting(name):\n  print("Hello, " + name)`,
          },
        ],
      },
      {
        Ques: "Use a Module",
        sol1: "Now we can use the module we just created, by using the import statement.",
        code1: [
          {
            code: `import mymodule\n\nmymodule.greeting("Jonathan")`,
          },
        ],
      },
      {
        Ques: "Variables in Module",
        sol1: "The module can contain functions, but also variables of all types (arrays, dictionaries, objects, etc).",
        code1: [
          {
            code: `person1 = {\n  "name": "John",\n  "age": 36,\n  "country": "Norway"\n}`,
          },
        ],
      },
      {
        Ques: "Use Variables from a Module",
        sol1: "You can access variables from a module in the same way as functions.",
        code1: [
          {
            code: `import mymodule\n\na = mymodule.person1["age"]\nprint(a)`,
          },
        ],
      },
      {
        Ques: "Naming a Module",
        sol1: "You can name the module file whatever you like, but it must have the file extension .py.",
        code1: [],
      },
      {
        Ques: "Re-naming a Module",
        sol1: "You can create an alias when you import a module, by using the `as` keyword.",
        code1: [
          {
            code: `import mymodule as mx\n\na = mx.person1["age"]\nprint(a)`,
          },
        ],
      },
      {
        Ques: "Built-in Modules",
        sol1: "There are several built-in modules in Python, which you can import whenever you like.",
        code1: [
          {
            code: `import platform\n\nx = platform.system()\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Using the dir() Function",
        sol1: "The `dir()` function can list all the function names (or variable names) in a module.",
        code1: [
          {
            code: `import platform\n\nx = dir(platform)\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Import From Module",
        sol1: "You can choose to import only specific parts from a module, by using the `from` keyword.",
        code1: [
          {
            code: `from mymodule import person1\n\nprint(person1["age"])`,
          },
        ],
      },
    ],
  },
  /****************************************************************************************************/

  "Python Datetime": {
    title: "Python Datetime",
    subtitle: "Working with Dates and Times in Python",
    Ques: [
      {
        Ques: "Python Dates",
        sol1: "A date in Python is not a data type of its own, but we can use the `datetime` module to work with dates as date objects.",
        code1: [],
      },
      {
        Ques: "Importing the datetime module",
        sol1: "You can import the `datetime` module to work with date and time in Python.",
        code1: [
          {
            code: `import datetime`,
          },
        ],
      },
      {
        Ques: "Displaying the Current Date and Time",
        sol1: "Use `datetime.datetime.now()` to get the current date and time.",
        code1: [
          {
            code: `import datetime\n\nx = datetime.datetime.now()\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Date Output",
        sol1: "When the code is executed, the output will be the current date and time, including year, month, day, hour, minute, second, and microsecond.",
        code1: [],
      },
      {
        Ques: "Returning Year and Weekday Name",
        sol1: "You can retrieve specific information like the year or the name of the weekday from the `datetime` object.",
        code1: [
          {
            code: `import datetime\n\nx = datetime.datetime.now()\n\nprint(x.year)\nprint(x.strftime("%A"))`,
          },
        ],
      },
      {
        Ques: "Creating Date Objects",
        sol1: "You can create a date object by using the `datetime()` class, which requires three parameters: year, month, and day.",
        code1: [
          {
            code: `import datetime\n\nx = datetime.datetime(2020, 5, 17)\n\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Optional Parameters in datetime()",
        sol1: "The `datetime()` class can also take optional parameters for time (hour, minute, second, microsecond) and timezone.",
        code1: [],
      },
      {
        Ques: "The strftime() Method",
        sol1: "The `strftime()` method of a `datetime` object formats the date object into a readable string, based on a specified format.",
        code1: [
          {
            code: `import datetime\n\nx = datetime.datetime(2018, 6, 1)\n\nprint(x.strftime("%B"))`,
          },
        ],
      },
      {
        Ques: "Legal Format Codes for strftime()",
        sol1: "The `strftime()` method supports several format codes for various parts of the date and time. Here's a list of some common ones:",
        code1: [],
      },
      {
        Ques: "List of strftime() Format Codes",
        sol1: "Here are some common format codes to use with `strftime()`:",
        code1: [
          {
            code: `
  %a  -> Weekday, short version  (e.g. Wed)
  %A  -> Weekday, full version  (e.g. Wednesday)
  %w  -> Weekday as a number 0-6, 0 is Sunday
  %d  -> Day of month 01-31
  %b  -> Month name, short version  (e.g. Dec)
  %B  -> Month name, full version  (e.g. December)
  %m  -> Month as a number 01-12
  %y  -> Year, short version, without century  (e.g. 18)
  %Y  -> Year, full version  (e.g. 2018)
  %H  -> Hour 00-23
  %I  -> Hour 00-12
  %p  -> AM/PM
  %M  -> Minute 00-59
  %S  -> Second 00-59
  %f  -> Microsecond 000000-999999
  %z  -> UTC offset +0100
  %Z  -> Timezone  (e.g. CST)
  %j  -> Day number of year 001-366
  %U  -> Week number of year, Sunday as the first day of week, 00-53
  %W  -> Week number of year, Monday as the first day of week, 00-53
  %c  -> Local version of date and time (e.g. Mon Dec 31 17:41:00 2018)
  %C  -> Century  (e.g. 20)
  %x  -> Local version of date (e.g. 12/31/18)
  %X  -> Local version of time (e.g. 17:41:00)
  %%  -> A % character  (%)
  %G  -> ISO 8601 year
  %u  -> ISO 8601 weekday (1-7)
  %V  -> ISO 8601 weeknumber (01-53)
              `,
          },
        ],
      },
    ],
  },
  /***************************************************************************************************/

  "Python Math": {
    title: "Python Math",
    subtitle: "Built-in Math Functions and the Math Module in Python",
    Ques: [
      {
        Ques: "Built-in Math Functions",
        sol1: "Python provides some basic built-in functions like `min()`, `max()`, `abs()`, and `pow()` to perform common mathematical tasks.",
        code1: [],
      },
      {
        Ques: "Using min() and max()",
        sol1: "The `min()` and `max()` functions can be used to find the lowest or highest value in an iterable.",
        code1: [
          {
            code: `x = min(5, 10, 25)\ny = max(5, 10, 25)\n\nprint(x)\nprint(y)`,
          },
        ],
      },
      {
        Ques: "Using abs()",
        sol1: "The `abs()` function returns the absolute (positive) value of the specified number.",
        code1: [
          {
            code: `x = abs(-7.25)\n\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Using pow()",
        sol1: "The `pow(x, y)` function returns the value of `x` to the power of `y` (x^y).",
        code1: [
          {
            code: `x = pow(4, 3)\n\nprint(x)`,
          },
        ],
      },
      {
        Ques: "The Math Module",
        sol1: "Python has a built-in module called `math`, which extends the list of mathematical functions and constants.",
        code1: [],
      },
      {
        Ques: "Importing the Math Module",
        sol1: "To use the `math` module, you must first import it using the `import` statement.",
        code1: [
          {
            code: `import math`,
          },
        ],
      },
      {
        Ques: "Using math.sqrt()",
        sol1: "The `math.sqrt()` method returns the square root of a number.",
        code1: [
          {
            code: `import math\n\nx = math.sqrt(64)\n\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Using math.ceil() and math.floor()",
        sol1: "The `math.ceil()` method rounds a number upwards to its nearest integer, while the `math.floor()` method rounds it downwards.",
        code1: [
          {
            code: `import math\n\nx = math.ceil(1.4)\ny = math.floor(1.4)\n\nprint(x) # returns 2\nprint(y) # returns 1`,
          },
        ],
      },
      {
        Ques: "Using math.pi",
        sol1: "The `math.pi` constant returns the value of Pi (approximately 3.14159).",
        code1: [
          {
            code: `import math\n\nx = math.pi\n\nprint(x)`,
          },
        ],
      },
    ],
  },
  /***************************************************************************************************/

  "Python JSON": {
    title: "Python JSON",
    subtitle: "Working with JSON in Python",
    Ques: [
      {
        Ques: "What is JSON?",
        sol1: "JSON (JavaScript Object Notation) is a syntax for storing and exchanging data. It is text, written in JavaScript object notation.",
        code1: [],
      },
      {
        Ques: "JSON in Python",
        sol1: "Python has a built-in package called `json`, which can be used to work with JSON data.",
        code1: [
          {
            code: `import json`,
          },
        ],
      },
      {
        Ques: "Parse JSON - Convert from JSON to Python",
        sol1: "You can parse a JSON string using the `json.loads()` method. The result will be a Python dictionary.",
        code1: [
          {
            code: `import json\n\n# some JSON:\nx = '{ "name":"John", "age":30, "city":"New York"}'\n\n# parse x:\ny = json.loads(x)\n\n# the result is a Python dictionary:\nprint(y["age"])`,
          },
        ],
      },
      {
        Ques: "Convert from Python to JSON",
        sol1: "If you have a Python object, you can convert it into a JSON string using the `json.dumps()` method.",
        code1: [
          {
            code: `import json\n\n# a Python object (dict):\nx = {\n  "name": "John",\n  "age": 30,\n  "city": "New York"\n}\n\n# convert into JSON:\ny = json.dumps(x)\n\n# the result is a JSON string:\nprint(y)`,
          },
        ],
      },
      {
        Ques: "Python to JSON Conversion Types",
        sol1: "You can convert the following Python objects into JSON strings: dict, list, tuple, string, int, float, True, False, None.",
        code1: [
          {
            code: `import json\n\nprint(json.dumps({"name": "John", "age": 30}))\nprint(json.dumps(["apple", "bananas"]))\nprint(json.dumps(("apple", "bananas")))\nprint(json.dumps("hello"))\nprint(json.dumps(42))\nprint(json.dumps(31.76))\nprint(json.dumps(True))\nprint(json.dumps(False))\nprint(json.dumps(None))`,
          },
        ],
      },
      {
        Ques: "Python to JSON Data Type Conversion",
        sol1: "When converting from Python to JSON, Python objects are mapped to the equivalent JavaScript data types.",
        code1: [],
      },
      {
        Ques: "Example of Python Object to JSON Conversion",
        sol1: "Here is an example of a Python object containing multiple data types converted into JSON.",
        code1: [
          {
            code: `import json\n\nx = {\n  "name": "John",\n  "age": 30,\n  "married": True,\n  "divorced": False,\n  "children": ("Ann","Billy"),\n  "pets": None,\n  "cars": [\n    {"model": "BMW 230", "mpg": 27.5},\n    {"model": "Ford Edge", "mpg": 24.1}\n  ]\n}\n\nprint(json.dumps(x))`,
          },
        ],
      },
      {
        Ques: "Format the Result",
        sol1: "The `json.dumps()` method allows you to format the resulting JSON string using the `indent` and `separators` parameters.",
        code1: [
          {
            code: `json.dumps(x, indent=4)`,
          },
        ],
      },
      {
        Ques: "Use the separators Parameter",
        sol1: "You can change the separators by passing custom values for `separators` in `json.dumps()`. The default is `(",
        ", ": ")`.",
        code1: [
          {
            code: `json.dumps(x, indent=4, separators=(". ", " = "))`,
          },
        ],
      },
      {
        Ques: "Order the Result",
        sol1: "You can specify whether the JSON output should be sorted by keys using the `sort_keys` parameter.",
        code1: [
          {
            code: `json.dumps(x, indent=4, sort_keys=True)`,
          },
        ],
      },
    ],
  },
  /***************************************************************************************************/

  "Python RegEx": {
    title: "Python RegEx",
    subtitle: "Working with Regular Expressions in Python",
    Ques: [
      {
        Ques: "RegEx in Python",
        sol1: "A RegEx (Regular Expression) is a sequence of characters that forms a search pattern. Python has a built-in package called `re`, which allows you to work with regular expressions.",
        code1: [],
      },
      {
        Ques: "Importing the re module",
        sol1: "You need to import the `re` module to use regular expressions in Python.",
        code1: [
          {
            code: `import re`,
          },
        ],
      },
      {
        Ques: "Searching a String with RegEx",
        sol1: "You can use the `re.search()` method to search a string for a pattern. In this example, we search if a string starts with 'The' and ends with 'Spain'.",
        code1: [
          {
            code: `import re\n\ntxt = "The rain in Spain"\nx = re.search("^The.*Spain$", txt)\nprint(x)`,
          },
        ],
      },
      {
        Ques: "RegEx Functions",
        sol1: "The `re` module offers several functions for working with regular expressions, including `findall()`, `search()`, `split()`, and `sub()`.",
        code1: [],
      },
      {
        Ques: "Metacharacters in RegEx",
        sol1: "Metacharacters are characters with a special meaning in regular expressions. Some common metacharacters include `[]`, ``, `.`, `^`, `$`, `*`, `+`, `?`, `{}`, `|`, and `()`.",
        code1: [],
      },
      {
        Ques: "Special Sequences in RegEx",
        sol1: "A special sequence starts with a backslash (``) and has a special meaning. For example, `d` matches digits, `s` matches whitespace, and `w` matches word characters.",
        code1: [],
      },
      {
        Ques: "RegEx Sets",
        sol1: "A set is a collection of characters inside square brackets `[]`, which allows for matching any character within the set. For example, `[a-n]` matches any letter between 'a' and 'n'.",
        code1: [],
      },
      {
        Ques: "Using the findall() Function",
        sol1: "The `findall()` function returns a list containing all matches found in a string.",
        code1: [
          {
            code: `import re\n\ntxt = "The rain in Spain"\nx = re.findall("ai", txt)\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Using the search() Function",
        sol1: "The `search()` function returns a match object if a match is found anywhere in the string. If no match is found, it returns `None`.",
        code1: [
          {
            code: `import re\n\ntxt = "The rain in Spain"\nx = re.search("\\s", txt)\nprint("The first white-space character is located in position:", x.start())`,
          },
        ],
      },
      {
        Ques: "Using the split() Function",
        sol1: "The `split()` function splits a string at each match and returns a list of substrings.",
        code1: [
          {
            code: `import re\n\ntxt = "The rain in Spain"\nx = re.split("\\s", txt)\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Using the sub() Function",
        sol1: "The `sub()` function replaces one or more matches with a specified string.",
        code1: [
          {
            code: `import re\n\ntxt = "The rain in Spain"\nx = re.sub("\\s", "9", txt)\nprint(x)`,
          },
        ],
      },
      {
        Ques: "Match Object",
        sol1: "A Match Object contains information about the search and the result. You can use methods like `.span()`, `.string()`, and `.group()` to retrieve information about the match.",
        code1: [],
      },
      {
        Ques: "Using the span(), string(), and group() Methods",
        sol1: "The `.span()` method returns the start and end positions of the match, the `.string()` method returns the string passed into the function, and the `.group()` method returns the part of the string where there was a match.",
        code1: [
          {
            code: `import re\n\ntxt = "The rain in Spain"\nx = re.search(r"\\bS\\w+", txt)\nprint(x.span())`,
          },
          {
            code: `import re\n\ntxt = "The rain in Spain"\nx = re.search(r"\\bS\\w+", txt)\nprint(x.string)`,
          },
          {
            code: `import re\n\ntxt = "The rain in Spain"\nx = re.search(r"\\bS\\w+", txt)\nprint(x.group())`,
          },
        ],
      },
    ],
  },

  /***************************************************************************************************/

  "Python PIP": {
    title: "Python PIP",
    subtitle: "Managing Python Packages with PIP",
    Ques: [
      {
        Ques: "What is PIP?",
        sol1: "PIP is a package manager for Python packages (or modules). It allows you to install and manage libraries and dependencies for your Python projects.",
        code1: [],
      },
      {
        Ques: "What is a Package?",
        sol1: "A package is a collection of Python files (modules) bundled together to be distributed as a single unit. It contains the necessary files for a module to be used in your project.",
        code1: [],
      },
      {
        Ques: "Check if PIP is Installed",
        sol1: "To check if PIP is installed, open your command line and type `pip --version`. If installed, it will return the version of PIP.",
        code1: [
          {
            code: `C:\\Users\\Your Name\\AppData\\Local\\Programs\\Python\\Python36-32\\Scripts> pip --version`,
          },
        ],
      },
      {
        Ques: "Install PIP",
        sol1: "If PIP is not installed, you can install it from the official page: [PIP Installation](https://pypi.org/project/pip/). PIP is included by default in Python 3.4 and later.",
        code1: [],
      },
      {
        Ques: "Download a Package",
        sol1: "Once PIP is installed, you can easily download a package using the `pip install` command. This example demonstrates installing the `camelcase` package.",
        code1: [
          {
            code: `C:\\Users\\Your Name\\AppData\\Local\\Programs\\Python\\Python36-32\\Scripts> pip install camelcase`,
          },
        ],
      },
      {
        Ques: "Using a Package",
        sol1: "After installing a package, you can import it into your project and use its functionalities. The following example shows how to use the `camelcase` package to format text.",
        code1: [
          {
            code: `import camelcase\n\nc = camelcase.CamelCase()\ntxt = "hello world"\nprint(c.hump(txt))`,
          },
        ],
      },
      {
        Ques: "Find Packages",
        sol1: "To find more Python packages, you can browse the Python Package Index (PyPI) at [https://pypi.org/](https://pypi.org/).",
        code1: [],
      },
      {
        Ques: "Remove a Package",
        sol1: "To uninstall a package, use the `pip uninstall` command. This example shows how to uninstall the `camelcase` package.",
        code1: [
          {
            code: `C:\\Users\\Your Name\\AppData\\Local\\Programs\\Python\\Python36-32\\Scripts> pip uninstall camelcase`,
          },
        ],
      },
      {
        Ques: "List Installed Packages",
        sol1: "You can use the `pip list` command to see a list of all the packages currently installed on your system.",
        code1: [
          {
            code: `C:\\Users\\Your Name\\AppData\\Local\\Programs\\Python\\Python36-32\\Scripts> pip list`,
          },
        ],
      },
    ],
  },
  /****************************************************************************************************/
  "Python Try Except": {
    title: "Python Try Except",
    subtitle: "Handling Errors and Exceptions in Python",
    Ques: [
      {
        Ques: "What is the `try` block?",
        sol1: "The `try` block lets you test a block of code for errors. If an error occurs, the program will stop and jump to the corresponding `except` block.",
        code1: [],
      },
      {
        Ques: "What is the `except` block?",
        sol1: "The `except` block lets you handle the error. It catches the error raised by the `try` block and allows you to define how to handle it.",
        code1: [
          {
            code: `try:\n  print(x)\nexcept:\n  print("An exception occurred")`,
          },
        ],
      },
      {
        Ques: "What is the `else` block?",
        sol1: "The `else` block lets you define code that will run if no errors were raised in the `try` block. It is executed when the `try` block completes successfully.",
        code1: [
          {
            code: `try:\n  print("Hello")\nexcept:\n  print("Something went wrong")\nelse:\n  print("Nothing went wrong")`,
          },
        ],
      },
      {
        Ques: "What is the `finally` block?",
        sol1: "The `finally` block will always execute, regardless of whether the `try` block raises an error or not. It's typically used for cleanup tasks like closing files or releasing resources.",
        code1: [
          {
            code: `try:\n  print(x)\nexcept:\n  print("Something went wrong")\nfinally:\n  print("The 'try except' is finished")`,
          },
        ],
      },
      {
        Ques: "How to raise an exception?",
        sol1: "You can raise an exception using the `raise` keyword. This allows you to stop the program and provide a custom error message.",
        code1: [
          {
            code: `x = -1\n\nif x < 0:\n  raise Exception("Sorry, no numbers below zero")`,
          },
        ],
      },
      {
        Ques: "How to raise a specific error?",
        sol1: "You can raise a specific error (such as a `TypeError`) if a condition is met. This can help ensure your program behaves as expected by validating input types or other conditions.",
        code1: [
          {
            code: `x = "hello"\n\nif not type(x) is int:\n  raise TypeError("Only integers are allowed")`,
          },
        ],
      },
      {
        Ques: "Handling Multiple Exceptions",
        sol1: "You can define multiple `except` blocks to handle different types of errors. This allows you to respond specifically to each type of exception.",
        code1: [
          {
            code: `try:\n  print(x)\nexcept NameError:\n  print("Variable x is not defined")\nexcept:\n  print("Something else went wrong")`,
          },
        ],
      },
      {
        Ques: "Using `finally` for Cleanup",
        sol1: "The `finally` block can be used for cleanup actions like closing files or releasing network resources, ensuring that the code runs whether an error occurred or not.",
        code1: [
          {
            code: `try:\n  f = open("demofile.txt")\n  f.write("Lorum Ipsum")\nexcept:\n  print("Something went wrong when writing to the file")\nfinally:\n  f.close()`,
          },
        ],
      },
    ],
  },
  /****************************************************************************************************/
  "Python User Input": {
    title: "Python User Input",
    subtitle: "Getting Input from the User in Python",
    Ques: [
      {
        Ques: "How does Python handle user input?",
        sol1: "Python allows for user input using the `input()` function (in Python 3) or `raw_input()` function (in Python 2). The method used depends on the Python version you are using.",
        code1: [],
      },
      {
        Ques: "How to get user input in Python 3.6?",
        sol1: "In Python 3.6 and later, you can use the `input()` method to ask the user for input. This method waits for the user to type something and press Enter.",
        code1: [
          {
            code: `username = input("Enter username:")\nprint("Username is: " + username)`,
          },
        ],
      },
      {
        Ques: "How to get user input in Python 2.7?",
        sol1: "In Python 2.7, the `raw_input()` method is used instead of `input()`. It behaves similarly but returns a string directly.",
        code1: [
          {
            code: `username = raw_input("Enter username:")\nprint("Username is: " + username)`,
          },
        ],
      },
      {
        Ques: "What happens when Python encounters the `input()` function?",
        sol1: "When Python encounters the `input()` function, it halts execution and waits for the user to type input. After the user enters the data and presses Enter, the program continues executing.",
        code1: [],
      },
    ],
  },
  /****************************************************************************************************/
  "Python String Formatting": {
    title: "Python String Formatting",
    subtitle: "An Overview of String Formatting Techniques in Python",
    Ques: [
      {
        Ques: "What are F-Strings in Python?",
        sol1: "F-Strings were introduced in Python 3.6 and are the preferred way to format strings. They allow you to embed expressions inside string literals by prefixing the string with the letter 'f'.",
        code1: [
          {
            code: `txt = f"The price is 49 dollars"\nprint(txt)`,
          },
        ],
      },
      {
        Ques: "How can you use placeholders and modifiers in F-Strings?",
        sol1: "You can add placeholders `{}` within the string where you want to insert variables. Modifiers, like `:.2f`, can be used to format the values inside the placeholders, such as controlling the number of decimal places.",
        code1: [
          {
            code: `price = 59\n txt = f"The price is {price:.2f} dollars"\nprint(txt)`,
          },
        ],
      },
      {
        Ques: "Can you perform operations inside F-Strings?",
        sol1: "Yes, you can perform math operations or even use conditional statements directly within the placeholders of an F-string.",
        code1: [
          {
            code: `txt = f"The price is {20 * 59} dollars"\nprint(txt)`,
          },
          {
            code: `price = 59\ntax = 0.25\n txt = f"The price is {price + (price * tax)} dollars"\nprint(txt)`,
          },
          {
            code: `price = 49\ntxt = f"It is very {'Expensive' if price > 50 else 'Cheap'}"\nprint(txt)`,
          },
        ],
      },
      {
        Ques: "Can you execute functions inside F-Strings?",
        sol1: "Yes, you can use built-in functions or custom functions within F-string placeholders.",
        code1: [
          {
            code: `fruit = "apples"\ntxt = f"I love {fruit.upper()}"\nprint(txt)`,
          },
          {
            code: `def myconverter(x):\n  return x * 0.3048\n\n txt = f"The plane is flying at a {myconverter(30000)} meter altitude"\nprint(txt)`,
          },
        ],
      },
      {
        Ques: "What are some other modifiers for string formatting?",
        sol1: "F-strings support various modifiers for formatting, including alignment, padding, and number formatting. Examples include using a comma for thousands separators or specifying the precision of floating-point numbers.",
        code1: [
          {
            code: `price = 59000\ntxt = f"The price is {price:,} dollars"\nprint(txt)`,
          },
        ],
      },
      {
        Ques: "What is the difference between F-Strings and `str.format()`?",
        sol1: "`str.format()` was used before Python 3.6 and still works, but F-strings are faster and more concise. `str.format()` allows you to use curly braces `{}` as placeholders and pass variables separately.",
        code1: [
          {
            code: `price = 49\n txt = "The price is {} dollars"\nprint(txt.format(price))`,
          },
          {
            code: `txt = "The price is {:.2f} dollars"\nprint(txt.format(price))`,
          },
        ],
      },
      {
        Ques: "How to use multiple values in `str.format()`?",
        sol1: "You can pass multiple values to the `format()` method and use multiple placeholders in the string. You can also use index numbers or named placeholders to manage which value goes where.",
        code1: [
          {
            code: `quantity = 3\nitemno = 567\nprice = 49\n myorder = "I want {} pieces of item number {} for {:.2f} dollars."\nprint(myorder.format(quantity, itemno, price))`,
          },
        ],
      },
      {
        Ques: "How to use index numbers and named placeholders in `str.format()`?",
        sol1: "You can use index numbers to refer to the position of arguments in the `format()` method. Named placeholders allow you to use names in the placeholders instead of positions.",
        code1: [
          {
            code: `quantity = 3\nitemno = 567\nprice = 49\n myorder = "I want {0} pieces of item number {1} for {2:.2f} dollars."\nprint(myorder.format(quantity, itemno, price))`,
          },
          {
            code: `age = 36\nname = "John"\n txt = "His name is {1}. {1} is {0} years old."\nprint(txt.format(age, name))`,
          },
          {
            code: `myorder = "I have a {carname}, it is a {model}."\nprint(myorder.format(carname = "Ford", model = "Mustang"))`,
          },
        ],
      },
    ],
  },
};
