import React, { useState } from 'react'
import NavStudent from './NavStudent'

const ViewStudent = () => {
    const [data,changeData] =useState(
        [
            {
                "name":"adila",
                "rollNo":"6",
                "admNo":"123",
                "college":"fisat"
        
            },
            {
                "name":"chandu",
                "rollNo":"6",
                "admNo":"123",
                "college":"fisat"
        
            },
            {
                "name":"adithya",
                "rollNo":"6",
                "admNo":"123",
                "college":"fisat"
        
            }
        ]

    )
    
  return (
    <div>
        <NavStudent/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">name</th>
                                    <th scope="col">rollNo</th>
                                    <th scope="col">admNo</th>
                                    <th scope="col">college</th>
                                </tr>
                            </thead>
                            <tbody>
                            {data.map(
                                (value,index)=>{
                                    return  <tr>
                                    <th>{value.name}</th>
                                    <td>{value.rollNo}</td>
                                    <td>{value.admNo}</td>
                                    <td>{value.college}</td>
                                    
                                </tr>
                                }
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default ViewStudent