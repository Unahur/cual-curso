import React, { Component } from 'react';
class DiasCursada extends Component{

    render(){
        return (
            <div>
                <table className="cursada">
                    <thead>
                        <tr>
                            <th></th>
                                <th>lu</th>
                                <th>ma</th>
                                <th>mi</th>
                                <th>ju</th>
                                <th>vi</th>
                                <th>sa</th>
                                <th>do</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>8:00 a 12:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>12:00 a 18:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>18:00 a 22:00</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                )
            }         
}

export default DiasCursada;