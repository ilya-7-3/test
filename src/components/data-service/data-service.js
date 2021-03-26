export default class DataService  {
    
    async getResource(){
        const res = await fetch(`http://www.mrsoft.by/data.json`);
        if(!res.ok){
            console.log(res.status)
             throw new  Error(`Не удалось получить данные по адресу http://www.mrsoft.by/data.json`); 
        }
        return  await res.json();
}
}