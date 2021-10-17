let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};
for (let value in statistics){
    if(statistics[value] % 2 != 0  || (`${value}`[0] == 'r')){
        console.log(`${value}: ${statistics[value]}`);
    }
}