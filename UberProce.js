class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distanceInMiles, timeInMinutes) {
      const price = this.baseFare + (distanceInMiles * this.costPerMile) + (timeInMinutes * this.costPerMinute);
      return price;
    }
  }
  
  
  const calculator = new UberPriceCalculator(5, 1.5, 0.2);
  const distance = 10; // miles
  const time = 20; // minutes
  const totalPrice = calculator.calculatePrice(distance, time);
  console.log(`The Uber price is $ ${totalPrice}`);