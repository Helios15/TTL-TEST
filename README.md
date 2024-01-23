# TTL-TEST
run project : yarn start:dev

Swagger link : http://localhost:8080/api/v1
# Note: 
If you want to test Friendly Football Match, your input is an array of numbers, where each element will be the number of goals scored by each team
 example input : {
  "numberOfTestCases": 5,
  "testCase": [1,2,3,1,4,1,2,3,1,2]
}  
  - there are 5 test cases, so it must be 10 teams, then the array is total goals of 10 teams

Similarly, with the Balanced Brackets, each element of the array will be the string to be tested
example input : {
  "numberOfTestCases": 2,
  "testCase": ["()()))", "(())()()"]
}
