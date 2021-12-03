import Dropdown from '../../../components/ui/dropdown/Dropdown'
import React from 'react'
import InputField from '../../../components/ui/input/Input'
import "./landingpage.css"


export default function LandingPage() {

    const ddselect = ()=>{
      console.log("hello there")
    }

    return (
        <div className="langindpage-conatainer">
            <Dropdown
            data={[
                {value: 1, label: 'India'},
                {value: 2, label: 'USA'},
                {value: 3, label: 'UK'},
                {value: 4, label: 'Germany'},
                {value: 5, label: 'Russia'},
                {value: 5, label: 'Italy'},
            ]}
            onChange={ddselect}
            />
            <InputField/>
        </div>
    )
}
