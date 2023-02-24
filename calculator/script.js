let stack = "";

function onClick(e)
{
    let target = e.target;
    if(!target.classList.contains('btn'))
        return;
    
    let result = document.querySelector('.result');

    let key = target.innerText;

    if(key === 'C')
    {
        result.innerText = '0';
        stack = "";
        return;
    }

    if (!Number.isNaN(Number(key)) )
    {
        if(result.innerText == "0")
            result.innerText = key;
        else 
            result.innerText += key;
        return;
    }

    if (target.classList.contains('backspace') )
    {
        let res = result.innerText;
        if(res != "0" && res.length > 1) 
            result.innerText = res.slice(0, -1);
        else if (res.length == 1)
            result.innerText = "0";
        return;
    }

    if (target.classList.contains('operation') )
    {
        let keyTouched = key;
        if(keyTouched == '\u00F7')
        {
            keyTouched = '/';
        }
        if(keyTouched == '\u00d7')
        {
            keyTouched = '*';
        }
        stack += result.innerText;
        if(keyTouched != "=")
        {
            stack += keyTouched;
            result.innerText = "0";
        }
        else if(keyTouched == "=")
        {
            result.innerText = eval(stack);
        }
        return;
    }


}

document.addEventListener('DOMContentLoaded', function() {
    let calc = document.querySelector('.calculator');
    calc.addEventListener("click", e => onClick(e));
 }, false);

