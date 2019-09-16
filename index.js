
function getDataFromBackend(dataId) {
    let backendPromise = new Promise(
        (resolve, reject) => {
            window.setTimeout(
                () => {
                    let backendError = Math.random();
                    console.log("Requested Data:" +dataId+" Error indicator:"+ backendError);
                    if (backendError > 0.20)
                        resolve("This is data from the backend:" + backendError);
                    else
                        reject("database not available:" + backendError);
                },
                Math.random() * 2000
            );
        }
    );
    return backendPromise;
}


getDataFromBackend("Hund").then(
    (result) => {
        //you can do complicated things with the backend data now
        console.log("Backend Data:" + result);
    }
).catch(
    (error) => {
        //no data from the backend, you have to handle this somehow
        console.log(`the Backend sent this Error: ${error}`);
    }
)
/*
Promise.all([getDataFromBackend("Katze"), getDataFromBackend("Maus"), getDataFromBackend("Krokodil")]).then(
    values => {
        values.forEach(
            (ergebnis) => console.log("Promise.all values:" + ergebnis)
        )
    }
).catch(
    err => console.log("Error:" + err)
)
*/



