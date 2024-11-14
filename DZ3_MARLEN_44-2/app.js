    let ammountNumbers = [6,17,25,2,10,3,7,8,29,40,34,19];

    let evenNumbers = 0;
    let notEvenNumbers = 0;
    for (let i = 0; i < ammountNumbers.length; i++) {
        if (ammountNumbers[i] % 2 === 0){
            evenNumbers += ammountNumbers [i];
        } else {
            notEvenNumbers += ammountNumbers[i];
        }
    }

    console .log('Четных чисел', evenNumbers, 'Нечетных чисел', notEvenNumbers,);


    let Grades = [5, 4, 3, 2, 4, 5, 1,]
    for (let i = 0; i <Grades.length; i++) {
        let gradeLetter;
        switch (Grades[i]) {
            case 5:
                gradeLetter = 'A';
                break;
            case 4:
                gradeLetter = 'B';
                break;
            case 3:
                gradeLetter = 'C';
                break;
            case 2:
                gradeLetter = 'D';
                break;
            case 1:
                gradeLetter = 'E';
                break;
            default:
                console.error('Invalid grade')
        }
        console.log ( gradeLetter, ' ', Grades[i]);
    }

