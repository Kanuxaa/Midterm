const order = document.getElementById("order")
const question = document.getElementById("question")
const prev = document.getElementById("btn1")
const next = document.getElementById("btn2")


const questions = [
    {
        question: "\"Finite will never grasp infinite. Hence, we believe.\"",
        answers: ["Spinoza"],
    },

    {
        question: "... invented the term \"Philosophy\"",
        answers: ["Pythagoras"],
    },
    
    {
        question: "\"Sapere aude\"",
        answers: ["Kant"],
    },

    {
        question: "\"I have striven not to laugh at human actions, not to weep at them, nor to hate them, but to understand them.\"",
        answers: ["Spinoza"],
    },
    
    {
        question: "\"The greatest obstacle to progress is not the absence of knowledge but the illusion of knowledge\"",
        answers: ["Boorstin"],
    },

    {
        question: "\"All men have opinions, but few think.\"",
        answers: ["Berkley"],
    },

    {
        question: "\"The unexamined life is not worth living.\"",
        answers: ["Socrates"],
    },

    {
        question: "“If you really look for truth, you must at least once in your life doubt, as far as possible, all things.”",
        answers: ["Descartes"],
    },

    {
        question: "Differences betweeen human and other creatures",
        answers: ["1.Consciousness | 2.Language | 3.Culture"],
    },
    
    {
        question: "... is a tendency to lay down principles as undeniably true, without consideration of evidence or the opinions of others.",
        answers: ["Dogmatism"],
    },

    {
        question: "Approximately during almost 99% of more than 2 million years of their history humans lived as ...",
        answers: ["hunter-gatherers"],
    },
    
    {
        question: "... is a philosophical view that all opinions take place from particular perspectives.",
        answers: ["Perspectivism"],
    },
    
    {
        question: "... is a process of internalization of “external” norms, patterns of behavior, ideas, myths, etc.",
        answers: ["Socialization"],
    },
    
    {
        question: "Three Historical Stages:",
        answers: ["1.Religion | 2.Philosophy | 3.Science"],
    },
    
    {
        question: "From the time of Ancient Greek philosopher Aristotle to the 19th century ... encompassed astronomy, medicine and physics.",
        answers: ["Natural philosophy"],
    },
    
    {
        question: "... is The branch of philosophy concerned with the teory of knowledge.",
        answers: ["Epistemology"],
    },
    
    {
        question: "Main epistemological approaches:",
        answers: ["1.Empiricism(sensories) | 2.Rationalism(reasons) | 3.Skepticism(doubting)"],
    },
    
    {
        question: "Formula of knowledge was introduced by Plato:",
        answers: ["Justified True Belief"],
    },
    
    {
        question: "Types of knowledge:",
        answers: ["1.Knowledge by acquaintance | 2.Practical knowledge | 3.Knowledge by description"],
    },
    
    {
        question: "Ways of Knowing:",
        answers: ["1.Language | 2.Sense perception | 3.Reason | 4.Intuition | 5.Emotions"],
    },
    
    {
        question: "... is a philosophical doctrine, according to which there is no such thing as Absolute Truth that exists in an objective way independent of what anyone happens to believe is true.",
        answers: ["Relativism"],
    }
]

let count = 0

btn2.addEventListener("click", ()=>{
    if (count>=1) prev.style.zIndex = 1;
    if (count>(21-1)*2) next.style.zIndex = -1;
    if (count%2===0){
        order.innerHTML = `Question ${count/2+1}`
        question.innerHTML = questions[count/2].question
        question.style.color = `white`
    }
    else{
        order.innerHTML = `Answer`
        question.innerHTML = questions[(count-1)/2].answers
        question.style.color = `black`
    } 
    count++;
})

btn1.addEventListener("click", ()=>{
    next.style.zIndex = 1;
    count--;
    if (count===1) prev.style.zIndex = -1;
    if (count%2!==0){
        order.innerHTML = `Question ${(count-1)/2+1}`
        question.innerHTML = questions[(count-1)/2].question
        question.style.color = `white`
    }
    else{
        order.innerHTML = `Answer`
        question.innerHTML = questions[count/2-1].answers
        question.style.color = `black`
    } 
})

