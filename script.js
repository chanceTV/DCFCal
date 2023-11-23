CashFlowInput = document.querySelector("#CurrentCashFlow");
CashGrowthInput = document.querySelector("#CashGrowth");
DiscountRateInput = document.querySelector("#DiscountRate");
UlimateGrowthInput = document.querySelector("#UlimateGrowth");
GrowthYearInput = document.querySelector("#GrowthYear");
CalculateButton = document.querySelector("#Calculate");
ResultOutput = document.querySelector("#Result");

function Calculate() {
  const FreeCashFlow = [parseInt(CashFlowInput.value)];
  const CashGrowth = CashGrowthInput.value * 0.01;
  const DiscountRate = DiscountRateInput.value * 0.01;
  const UlimateGrowth = UlimateGrowthInput.value * 0.01;
  const GrowthYear = GrowthYearInput.value;
  const DCF = [];

  // 현금흐름 추정
  for(let i = 1; i < GrowthYear; ++i) {
    FreeCashFlow.push(FreeCashFlow[i - 1] * (1 + CashGrowth));
  }
  let DCFTotal = 0;
  for(let i = 0; i < GrowthYear; ++i) {
    DCF[i] = FreeCashFlow[i] / (1 + DiscountRate) ** (i + 1);
    DCFTotal += DCF[i];
  }

  // 영구가치 구하기
  const UlimateValue = (FreeCashFlow[GrowthYear-1] * (1 + UlimateGrowth) / (DiscountRate - UlimateGrowth)) / ((1 + DiscountRate) ** GrowthYear);

  const TotalValue = DCFTotal + UlimateValue;

  ResultOutput.value = TotalValue;
  
}

CalculateButton.addEventListener("click", Calculate);