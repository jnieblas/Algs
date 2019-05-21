FROM python:3
ENV val_one 1234
ENV val_two 56789
COPY . .
CMD python ./src/karatsuba.py $val_one $val_two

# Runtime Notes:
# To run the container with custom vars:
# $ docker run -e "val_one=some_num" -e "val_two=some_num" karatsuba