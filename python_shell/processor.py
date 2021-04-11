import sys
# Since Python support sort of string.encode
# so encode firstname and lastname for nothing :)))
firstname = sys.argv[1]
lastname = sys.argv[2]

f_encode = firstname.encode(encoding="ascii", errors="backslashreplace")
l_encode = lastname.encode(encoding="ascii", errors="backslashreplace")

print(sys.argv[1])
print(sys.argv[2])
print(f_encode)
print(l_encode)