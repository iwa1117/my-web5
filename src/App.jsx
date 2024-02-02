import React, { useState } from 'react';
import '../styles/style.css';

// Reactコンポーネントの外に関数を定義
function calculateBMI(weight, height) {
    const heightInMeter = height / 100;
    return (weight / (heightInMeter * heightInMeter)).toFixed(2);
}

function displayResult(bmi) {
     if(bmi<18.5){
        document.getElementById('result').innerHTML = `Your BMI is: ${bmi}`;
        document.getElementById('result').innerHTML += '<br>痩せ型ですもう少し筋肉をつけてみましょう<br>';
        var imgElement = document.createElement('img');
        imgElement.src = 'picture/yase01_boy.png'; // 画像のパスを実際のものに変更
        imgElement.alt = 'テスト画像';
        imgElement.width = 100;
        document.getElementById('result').appendChild(imgElement);
    }

    if(bmi>=18.5 && bmi<25){
        document.getElementById('result').innerHTML = `Your BMI is: ${bmi}`;
        document.getElementById('result').innerHTML += '<br>標準型です維持を目指しましょう<br>';
        var imgElement = document.createElement('img');
        imgElement.src = 'picture/stand1_front01_boy.png'; // 画像のパスを実際のものに変更
        imgElement.alt = 'テスト画像';
        imgElement.width = 100;
        document.getElementById('result').appendChild(imgElement);
    }

    if(bmi>=25){
        document.getElementById('result').innerHTML = `Your BMI is: ${bmi}`;
        document.getElementById('result').innerHTML += '<br>標準型です維持を目指しましょう<br>';
        var imgElement = document.createElement('img');
        imgElement.src = 'picture/himan03_youngman.png'; // 画像のパスを実際のものに変更
        imgElement.alt = 'テスト画像';
        imgElement.width = 100;
        document.getElementById('result').appendChild(imgElement);
    }
    
}

function showTrainingMenu(selection) {
    let menu = '';
    if (selection === 'active') {
        menu = `<h2>今日はこのメニューを頑張りましょう！</h2>
            <div>
                <input type="checkbox" id="running" />
                <label htmlFor="running">ランニング１５分</label>
            </div>
            <div>
                <input type="checkbox" id="sitUps" />
                <label htmlFor="sitUps">腹筋５０回</label>
            </div>
            <div>
                <input type="checkbox" id="backExercises" />
                <label htmlFor="backExercises">背筋３０回</label>
            </div>
            <div>
                <input type="checkbox" id="pushUps" />
                <label htmlFor="pushUps">腕立て２０回</label>
            </div>
            <div>
                <input type="checkbox" id="burpeeJumps" />
                <label htmlFor="burpeeJumps">バーピージャンプ２０回</label>
            </div>
            <div>
                <input type="checkbox" id="fullBodyStretch" />
                <label htmlFor="fullBodyStretch">全身ストレッチ１０分</label>
            </div>`;
    } else if (selection === 'light') {
            menu= `<h2>今日はこのメニューを頑張りましょう！</h2>
            <div>
                <input type="checkbox" id="sitUps" />
                <label htmlFor="sitUps">腹筋２０回</label>
            </div>
            <div>
                <input type="checkbox" id="pushUps" />
                <label htmlFor="pushUps">腕立て１０回</label>
            </div>
            <div>
                <input type="checkbox" id="fullBodyStretch" />
                <label htmlFor="fullBodyStretch">全身ストレッチ５分</label>
            </div>
            `;
    } else if (selection === 'neutral') {
        menu= `<h2>今日はこのメニューを頑張りましょう！</h2>
        <div>
        <input type="checkbox" id="burpeeJumps" />
        <label htmlFor="burpeeJumps">バーピージャンプ５回</label>
    </div>
    <div>
                <input type="checkbox" id="fullBodyStretch" />
                <label htmlFor="fullBodyStretch">全身ストレッチ１０分</label>
    </div>`;

    } else if (selection === 'strength') {
        menu=`<h2>今日はこのメニューを頑張りましょう！</h2>
        <div>
                <input type="checkbox" id="sitUps" />
                <label htmlFor="sitUps">腹筋５０回</label>
            </div>
            <div>
                <input type="checkbox" id="backExercises" />
                <label htmlFor="backExercises">背筋３０回</label>
            </div>
            <div>
                <input type="checkbox" id="pushUps" />
                <label htmlFor="pushUps">腕立て２０回</label>
            </div>
            <div>
                <input type="checkbox" id="planck" />
                <label htmlFor="burpeeJumps">プランク１分×３回</label>
            </div>
            <div>
                <input type="checkbox" id="fullBodyStretch" />
                <label htmlFor="fullBodyStretch">全身ストレッチ１０分</label>
            </div>`;

    } else if (selection === 'stretch') {
        menu= `<h2>今日はこのメニューを頑張りましょう！</h2>
        <div>
        <input type="checkbox" id="burpeeJumps" />
        <label htmlFor="burpeeJumps">バーピージャンプ１０回</label>
    </div>
    <div>
                <input type="checkbox" id="fullBodyStretch" />
                <label htmlFor="fullBodyStretch">足のストレッチ１０分</label>
    </div>
    <div>
    <input type="checkbox" id="fullBodyStretch" />
    <label htmlFor="fullBodyStretch">上半身のストレッチ１０分</label>
    </div>`;
    }
    return menu;
}

// Reactコンポーネント
export default function App() {
    // 各メニュー項目のチェック状態を管理するstate
    const [checkedItems, setCheckedItems] = useState({
        running: false,
        sitUps: false,
        backExercises: false,
        pushUps: false,
        burpeeJumps: false,
        fullBodyStretch: false,
    });

    // BMIを計算する関数
    const calculateBMI = (weight, height) => {
        const heightInMeter = height / 100;
        return (weight / (heightInMeter * heightInMeter)).toFixed(2);
    };

    // BMI計算をトリガーする関数
    const handleCalculateBMI = () => {
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const bmi = calculateBMI(weight, height);
        displayResult(bmi);
    };

    // 気分が変わった時のハンドラー
    const handleMoodChange = (event) => {
        const selectedMood = event.target.value;
        const trainingMenu = showTrainingMenu(selectedMood);
        document.getElementById('trainingMenu').innerHTML = trainingMenu;
    };

    // チェックボックスの変更ハンドラー
    const handleCheckboxChange = (itemName) => {
        setCheckedItems({
            ...checkedItems,
            [itemName]: !checkedItems[itemName],
        });
    };

    // 各メニュー項目のHTMLを生成する関数
    const generateMenuHTML = () => {
        return (
            <div>
                
                {/* 他のメニュー項目のチェックボックスとラベル */}
            </div>
        );
    };

    const [message, setMessage] = useState('');
    const [goals, setGoals] = useState([]);
    
    const [showGoalForm, setShowGoalForm] = useState(false);
    // ボタンがクリックされた時の処理
const handleButtonClicked = () => {
    saveGoal(); // 目標の保存
    displayGoals(); // 目標の表示
    displayMessage(); // 「お疲れさまでした!!」の表示
    setShowGoalForm(true);
};


const handleGoalSubmit = (event) => {
    event.preventDefault();
    const goalInput = document.getElementById('goalInput');
    const goal = goalInput.value;

    // 入力された目標を保存する（ここではローカルストレージを使用）
    saveGoal(goal);

    // メッセージを表示
    displayMessage();

    // 目標を表示する要素を取得
    const goalList = document.getElementById('goalList');

    // 目標リストをクリア
    goalList.innerHTML = '';

    // ローカルストレージから目標を読み込み、リストに表示する
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];

    savedGoals.forEach((savedGoal) => {
        const goalItem = document.createElement('div');
        goalItem.classList.add('goal-item');

        const goalText = document.createElement('p');
        goalText.textContent = savedGoal;

        const messageText = document.createElement('p');
        messageText.textContent = '素晴らしい目標です！明日も頑張りましょう！！';

        goalItem.appendChild(goalText);
        goalItem.appendChild(messageText);

        goalItem.addEventListener('click', () => handleGoalClick(savedGoal));
        goalList.appendChild(goalItem);
    });
};
    const displayGoals = () => {
        // 目標を表示する要素を取得
        const goalList = document.getElementById('goalList');
    
        // 目標リストをクリア
        goalList.innerHTML = '';
    
        // 入力された目標を表示
        goals.forEach((goal, index) => {
            const goalItem = document.createElement('div');
            goalItem.classList.add('goal-item');
    
            const goalText = document.createElement('p');
            goalText.textContent = goal;
    
            const messageText = document.createElement('p');
            messageText.textContent = '素晴らしい目標です！明日も頑張りましょう！！';
    
            goalItem.appendChild(goalText);
            goalItem.appendChild(messageText);
    
            goalItem.addEventListener('click', () => handleGoalClick(goal));
            goalList.appendChild(goalItem);
        });
    
        // 新しく追加された目標に関するメッセージを表示
        if (goals.length > 0) {
            setMessage('素晴らしい目標です！明日も頑張りましょう！！');
        }
    };
    
  
      // ローカルストレージに目標を保存する関数
      const saveGoal = (goal) => {
        let savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
        savedGoals = [goal]; // 新しい目標で上書き
        localStorage.setItem('goals', JSON.stringify(savedGoals)); // 目標を保存
    };
      // 入力された目標に関するメッセージを表示する関数
      const displayMessage = () => {
        setMessage('お疲れさまでした!!');
    };

    return (
    <div>
        <header>今日のダイエット</header>
        <p>本ページは、ダイエットしたい方、運動不足の方、体を動かすことが好きな方に向けたおすすめの機能を備えたページです。概要としては、BMI計算、気分に合わせた運動メニューの提案、そして目標の設定を行っています。早速、指示に従ってダイエットを始めましょう！</p>
        <p>まずは身長と体重を入力してBMIを見て自分の現状を確認してみましょう。</p>
        {/* BMI計算関連の要素 */}
        <input type="number" id="weight" placeholder="体重(kg)" />
        <input type="number" id="height" placeholder="身長(cm)" />
        <button onClick={handleCalculateBMI}>BMIを計算する</button>
        <div id="result">

    </div>

            {/* 気分選択の要素 */}
    <div>
        <h2>今日はどんな気分ですか？</h2>
        <select id="mood" onChange={handleMoodChange}>
            <option value="active">いっぱい動きたい</option>
            <option value="light">ちょっとだけ運動したい</option>
            <option value="neutral">あんま気分のらない</option>
            <option value="strength">筋トレ多め</option>
            <option value="stretch">ストレッチたくさん</option>
        </select>
    </div>

        {/* トレーニングメニュー */}
    <div id="trainingMenu">{generateMenuHTML()}</div>
    <h2>全てチェックできたら終了をクリックしてください。</h2>

    <div>
                <button onClick={handleButtonClicked}>終了</button>
                <p>{message}</p>
            </div>

            {showGoalForm && (
            <form id="goalForm" onSubmit={handleGoalSubmit}>
                <label htmlFor="goalInput">目標：</label>
                <input type="text" id="goalInput" name="goal" required />
                <button type="submit">目標を設定</button>
            </form>
        )}

        <h2>明日の目標</h2>
        <div id="goalList">
            {goals.map((goal, index) => (
                <h3 key={index}>{goal}</h3>
            ))}
        </div>
        <footer>
        <p>
          日本大学情報科学科 ２年 5422077 岩崎真衣 <br />
          日本大学文理学部情報科学科 Webプログラミングの演習課題
        </p>
      </footer>
    </div>

);
}