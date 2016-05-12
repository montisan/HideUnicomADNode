(function (){

	if (window.scanAndHideUnicomNode !== undefined) 
	{
		return;
	}

	window.scanAndUnicomNodeCount = 0;
	
	window.scanAndHideUnicomNode = function ()
	{
		var node =  document.getElementById('tlbstoolbar');
		if (node) 
		{
			node.style.display = 'none';
		}
		else if (window.scanAndUnicomNodeCount < 200)
		{
			// 循环查找三分钟左右
			setTimeout(scanAndHideUnicomNode, 1000);
		}

		window.scanAndUnicomNodeCount ++;
	}

	setTimeout(scanAndHideUnicomNode, 500);

})();
