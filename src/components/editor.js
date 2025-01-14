/*global chrome*/
/* eslint-disable no-undef */
import React,{useState,useEffect} from "react";
import SimpleMDE from "react-simplemde-editor";

const Editor = ()=>{
    const [notes, setNotes] = useState("")

    useEffect(()=>{
        let text = localStorage.getItem("notestext") || "Write something...";
        setNotes(text)
    },[])

    const onChange = (value) => {
        localStorage.setItem('notestext', value);
        setNotes(value);
    };
    return <SimpleMDE value={notes} onChange={onChange} />
    
}

export default Editor