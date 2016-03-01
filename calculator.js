<script>
var startYear = 2013;
var startMonth = 3;


var endYear = 2014;
var endMonth = 1;


periodCalculator(startYear, startMonth, endYear, endMonth);

function periodCalculator(startYear, startMonth, endYear, endMonth){
	var periodDate = '';
	if(startYear == endYear){
		periodDate = (endMonth - startMonth + 1) + '個月';
	}
	else{
		var startDate  = new Date(startYear, startMonth-1, 1);
		var endDate  = new Date(endYear, endMonth-1, 1);
		
		var monthAdd = 0;
		while (endDate >= startDate) {
			monthAdd++;
			var addMonth = startDate.getMonth() + 1;
			startDate = new Date(startDate.setMonth(addMonth));
		}
		var yearAdd = monthAdd / 12;
		if(Math.floor(yearAdd) == 0){
			periodDate = (monthAdd - (Math.floor(yearAdd) * 12)) + '個月';
		}else{
			periodDate = Math.floor(yearAdd) + '年' + (monthAdd - (Math.floor(yearAdd) * 12)) + '個月';
		}
			
	}
	document.write(periodDate);
}

</script>
