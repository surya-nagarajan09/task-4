//GET ALL THE COUNTRIES WITH POPULATION OF LESS THAN 2 LACS USING FILTER FUNCTION.
const populationless=data.filter((element)=>
{
return element.population>200000;
});
//GET ALL THE COUNTRIES FROM ASIA CONTINENT / “REGION” USING FILTER FUNCTION.
const asia=data.filter((element)=>
{
    return element.region=="Asia";
});
 //PRINT THE FOLLOWING DETAILS NAME, CAPITAL, FLAG USING FOREACH FUNCTION.

Let countryname=[];
data.forEach(element=>{
    countryname.push(element.name);
});
Let flag=[];
Data.forEach(element=>{
Flag.push(element.flag);
});
Let capital=[];
Data.forEach(element=>{
Capital.push(element.capital);
});
 //PRINT THE COUNTRY WHICH USES US DOLLARS AS CURRENCY.

const dollar=data.filter((element)=>
{
return element.currencies[0].name=="United States Dollar";
});


//PRINT THE TOTAL POPULATION OF COUNTRIES USING REDUCE FUNCTION.
Let population=[];
For(let i=0;i<data.length;i++)
{
population.push(data[i].population);
}
Const reducer=(accumulator,currentValue)=>accumulator+currentValue;
Console.log(population.reduce(reducer));
