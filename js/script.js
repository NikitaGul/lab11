$(document).ready(transcript);

function transcript()
{
	let englishWords = ["Word", "Apple", "Nice", "Today", "Five", "Good", "Dog", "Explain", "Both", "Scientist"];
	
	let translateWords = ["слово", "яблуко", "чудово", "сьогодні", "п'ять", "добре", "собака", "пояснювати", "обидва", "вчений"];
	
	let rigthCounter = 0;
	let wrongCounter = 0;
	let steps = 0; 
	let index = 0;
	let again = 0;
	
	let prev = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
	
	$(".cardDiv").bind("click", translate);
	
	function translate()
	{
	$(".inputWord").attr("disabled", false);
	let wordTry = $(".inputWord").val();
	if((wordTry.trim() == "" || !isNaN(wordTry)) && steps > 0 && again == 0)
	{
		$(".levelEnglish").text("Будь ласка, введіть слово");
	}
	else
	{
		
		if(steps == 10)
		{
			if(again == 0)
			{
				if(wordTry.toLowerCase() == translateWords[prevRandom])
				{
		
				console.log("Good");
					++rigthCounter;
				}
		
				else
				{
					++wrongCounter;
				}
				again = 1;
			}
			else
			{
				steps = 0;
				prev = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
				index = 0;
				if(rigthCounter <= 3)
				{
					alert("Ваш рівень англійської початківець");
				}
				if(rigthCounter > 3 && rigthCounter < 7)
				{
					alert("Ваш рівень англійської середній");
				}
				if(rigthCounter >= 7 )
				{
					alert("Ваш рівень англійської високий");
				}
				rigthCounter = 0;
				wrongCounter = 0;
				again = 0;
				
				$(".cardDiv").text("Ще раз");
			}
			$(".inputWord").attr("disabled", true);
		}
		
		else 
		{
		++steps;
		random = Math.floor(Math.random() * englishWords.length);
		if(steps == 1)
		{
			prevRandom = random;
		}
		
		$(".stepsDiv").text("Спроб : " + steps + " / 10");
		
		while(true)
		{
			let check = 0;
			for(let i = 0; i < 10; ++i)
			{
				if(random == prev[i])
				{
					++check;
					random = Math.floor(Math.random() * englishWords.length);
				}
			}
			if(check == 0)
			{
				break;
			}
		}
		
		$(".cardDiv").text(englishWords[random]);
		
		console.log(translateWords[random]);
		
		console.log(wordTry);
		
		if(steps != 1)
		{
		if(wordTry.trim().toLowerCase() == translateWords[prevRandom])
		{
		
		console.log("Good");
			++rigthCounter;
		}
		
		else
		{
			++wrongCounter;
		}
		}
		
		prev[index] = random;
		
		++index;
		
		prevRandom = random;
		}
		$("#rigthCheck").text("Вірно: " + rigthCounter);
		$("#wrongCheck").text("Невірно: " + wrongCounter);
		$(".levelEnglish").text("");
	}
	$(".inputWord").val("");
	}
}