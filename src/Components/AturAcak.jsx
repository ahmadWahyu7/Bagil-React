import React, { useState } from 'react';

const AturAcak = () => {
  const [nameList, setNameList] = useState('');
  const [groupCount, setGroupCount] = useState(0);
  const [groups, setGroups] = useState([]);

  const handleNameListChange = (event) => {
    setNameList(event.target.value);
  };

  const handleGroupCountChange = (event) => {
    setGroupCount(parseInt(event.target.value));
  };

  const generateGroups = () => {
    const names = nameList.split('\n').filter((name) => name.trim() !== '');
    const shuffledNames = shuffle(names);

    const newGroups = [];
    for (let i = 0; i < groupCount; i++) {
      newGroups.push([]);
    }

    let currentGroupIndex = 0;
    shuffledNames.forEach((name) => {
      newGroups[currentGroupIndex].push(name);
      currentGroupIndex = (currentGroupIndex + 1) % groupCount;
    });

    setGroups(newGroups);
  };

  const shuffle = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div class="container p-5">
        <h2 className='text-center fw-bold'>Atur Kelompok secara Acak</h2>

        <section className='buatacak mt-5'>
            <div class="row">
                <div class="col-sm-6 col-12">
                    <h3>Masukan Nama</h3>
                    <div class="form-floating d-flex align-items-center justify-content-end">
                        <textarea 
                        class="form-control" 
                        placeholder="Leave a comment here" 
                        id="nameList" 
                        value={nameList} 
                        onChange={handleNameListChange}></textarea>
                        <label for="nameList">List Nama: pisahkan nama dengan enter</label>
                    </div>
                </div>
                <div class="col-sm-6 col-12">
                    <label for="groupCount" class="form-label pt-4">Jumlah Kelompok:</label>
                    <input 
                    type="number" 
                    class="form-control" 
                    id="groupCount" 
                    value={groupCount} 
                    onChange={handleGroupCountChange} />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <button onClick={generateGroups} class="btn btn-dark mt-4">Buat Kelompok</button>
            </div>
        </section>
         
        <section className='hasilacak my-5'>
            <h3 className='my-3 fw-bold'>Hasil:</h3>
            <div className="d-flex justify-content-evenly flex-wrap">
            {groups.map((group, index) => (
                <div key={index} className='card'>
                    <div class="card-header acak-header fw-bold">Kelompok {index + 1}</div>
                    <ul class="list-group list-group-flush">
                        {group.map((name, nameIndex) => (
                        <li key={nameIndex} class="list-group-item">{name}</li>
                        ))}
                    </ul>
                </div>
            ))}
            </div>
        </section>
    </div>
  );
};

export default AturAcak;