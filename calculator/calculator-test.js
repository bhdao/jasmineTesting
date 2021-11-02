

function calculateMonthlyPayment(values) {
  let monthlyRate = values["rate"] / 12;
  let numPayments = values["years"] * 12;

  let top = values["amount"] * monthlyRate;
  let bottom = 1 - Math.pow(1 + monthlyRate, -numPayments);

  const paymentValue = Math.round(top / bottom * 100) / 100;
  return paymentValue.toFixed(2).toString();
}

describe("calcMonthlyPayment", () => {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({ amount: 100000, rate: 0.08, years: 30 })).toBe("733.76");
    expect(calculateMonthlyPayment({ amount: 20, rate: 0.2, years: 3 })).toBe("0.74");
  });

  it('should accept extreme values', function () {
    expect(calculateMonthlyPayment({ amount: 5, rate: 0.99, years: 100 })).toBe("0.41");
    expect(calculateMonthlyPayment({ amount: 100000, rate: 0.01, years: 1000 })).toBe("83.34");
  });
  
  it("should return a result with 2 decimal places", function () {
    expect(calculateMonthlyPayment({ amount: 500, rate: 0.45, years: 2 })).toBe("31.96");
    expect(calculateMonthlyPayment({ amount: 1, rate: 0.40, years: 1 })).toBe("0.10");
  });
});




/// etc
