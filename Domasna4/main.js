const { 
    getAllCars,
    getSingleCar,
    addNewCar,
    deleteCar,
    editCar
} = require("./crud")

let cars;

(async () => {
    try{
        await addNewCar({brand: "Audi",  year: 2020, color:"Black", id: 0});
        await addNewCar({brand: "Toyota", year: 2021, color:"White", id: 1});
        await addNewCar({brand: "Seat",  year: 2015, color:"Silver", id: 2});
        
        await deleteCar(1);

        cars = await getAllCars();
        console.log(cars);

        const car = await getSingleCar(2);
        console.log(car);

        await editCar(0, {brand: "Skoda", year: 2005});

    }catch (err){
        console.log(err);
    }
    finally {
        console.log("Code has finished executing");
    }
})();