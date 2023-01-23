import React, {useCallback, useEffect, useMemo, useState} from "react";


export default {
    title: 'Stories/useMemo',
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};


export const DifficultCountingExample = () => {
    const [a,setA] = useState<number>(3)
    const [b,setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;

    resultA =useMemo(()=>{
        let tempResultA = 1
        for (let i=1;i<=a;i++){
            let fake = 0;
            while (fake < 100000000){
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA *= i
        }
        return tempResultA
    },[a])
    /*useEffect(()=>{
        resultA = 1
        for (let i=1;i<=a;i++){
            let fake = 0;
            while (fake < 100000000){
                fake++;
                const fakeValue = Math.random()
            }
            resultA *= i
        }
    },[a])*/


    for (let i=1;i<=b;i++){
        resultB *= i
    }

    return (
        <>
            <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e)=>setB(+e.currentTarget.value)}/>
            <hr/>
            <div>Result a:{resultA}</div>
            <div>Result b:{resultB}</div>
        </>
    )
}

const NewMessagesCounter = (props: { count:number })=>{
    return <div>
        {props.count}
    </div>
}
const UsersSecret = (props:{users:Array<string>})=>{
    console.log('USERS SECRET')
    return <div>
        {props.users.map((u,i)=> <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

// filter всегда возвращает новый массив поэтому без useMemo ReactMemo все равно будет перерисовывать компоненту

export const HelpsReactMemo = () => {
    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(['Dima','Valera','Ignat','Sergey'])

    const newArray = useMemo(()=>users.filter(u => u.toLowerCase().indexOf('a')>-1),[users])

    const addUser = ()=>{
        setUsers([...users,'Svetlana'])
    }
    return (
        <>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={addUser}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter,setCounter] = useState(0)
    const [books,setBooks] = useState(['React','Js','HTML','CSS'])

    const newArray = useMemo(()=>books.filter(u => u.toLowerCase().indexOf('a')>-1),[books])

    const addBook = ()=>{
        console.log(books)
        setBooks([...books,'Angular'])
    }
    const memoizedAddBook = useMemo(()=>addBook,[books])
    const useCallbackFunction = useCallback(addBook,[books])
    return (
        <>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {counter}
            <Books books={newArray} addBook={memoizedAddBook}/>
        </>
    )
}

const BooksSecret = (props:{books:Array<string>,addBook:()=>void})=>{
    console.log('BooksSecret')
    return <div>
        <button onClick={props.addBook}>add book</button>
        {props.books.map((book,i)=> <div key={i}>{book}</div>)}
    </div>
}

const Books = React.memo(BooksSecret)