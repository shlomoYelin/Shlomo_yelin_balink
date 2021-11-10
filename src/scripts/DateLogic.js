
export  function ChangeDate(DateStr) {
    if(DateStr == "today" || DateStr == "tomorrow")
        return DateStr;
    const tmp = new Date(DateStr);
    const month = tmp.toLocaleString('default', { month: 'short' });
    const dayOfWeek = tmp.toLocaleString('default', { weekday: 'short' });
    const dayOfMonth = DateStr.split('-')[2];
    
    return dayOfWeek + ' ' + dayOfMonth + ' ' + month;
} 