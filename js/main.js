first: for (let num = 0; num < 3; num++) {
    for (let size = 0; size < 5; size++) {
        if (size == 4) {
            continue first;
        }
        console.log(size);
    }
}

alert('Ти красотка!')