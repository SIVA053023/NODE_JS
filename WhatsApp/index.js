// import wbm from 'wbm'

// wbm.start().then(async()=>{
//     const phones=[`+919515283518`];
//     const message="hello good morning";
//     await wbm.send(phones,message);
//     await wbm.end();
// }).catch(err=>console.log(err.message))
import wbm from 'wbm';

(async () => {
    try {
        await wbm.start();
        
        const phones = ['+919515283518']; // Ensure the phone number format is correct
        const message = "hello good morning";
        
        await wbm.send(phones, message);
        
        await wbm.end();
    } catch (err) {
        console.error('An error occurred:', err.message);
    }
})();
