def longest(s1, s2):
    return ''.join(sorted((set(list(s1 + s2)))))


longest("aretheyhere", "yestheyarehere")