import React from 'react';
import { Button } from '../Button';
import axios from "axios";
import ExampleDoc from '../../images/404.svg';
const config = () => {

    const test = (e) => {
        axios({
            url: 'http://localhost:3000/static/media/3dv1.9ad7eab5.png',
            method: 'GET',
            responseType: 'blob', // important
          }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'file.png');
            document.body.appendChild(link);
            link.click();
          });
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        let getAuthToken = localStorage.getItem('authToken');
        console.log(getAuthToken);

        // axios.post('http://localhost:5000/users/add', user).then((res) => {
        //   console.log(res.data);
        //   clearState();
        // });
        // let username = 'dc927'
        // try {
        //     axios.get(`http://localhost:5000/users/${username}`).then((res) => {
        //         console.log(res.data);
        //     });
        // } catch (error) {
        //     console.log(error);
        // }

        // try { // Find
        //     axios.post('http://localhost:5000/users/getchartdata/').then((res) => {
        //         console.log(res.data);
        //         let obj = res.data;
        //         console.log(obj[0].chart_data[0].female);
        //     });
        // } catch (error) {
        //     console.log(error);
        // }

        // try { FindOne
        //     axios.post('http://localhost:5000/users/getchartdata/').then((res) => {
        //         console.log(res.data);
        //         let obj = res.data;
        //         console.log(obj.chart_data[0].female);
        //     });
        // } catch (error) {
        //     console.log(error);
        // }

    }

    // const download = (data, filename, type) => {
    //     let file = new Blob
    // }

  return (
    <div>
        <h3>Admin tools.</h3>
        <form autoComplete="off" className="form" onSubmit={handleSubmit}>
        <div className="form__btn">
            <Button buttonSize="btn--wide" buttonColor="blue" type="submit">
              Get JSON data
            </Button>
        </div>
        </form>
        {/* <a href={ExampleDoc} download="MyExampleDoc" target='_blank'>
            <Button buttonSize="btn--wide" buttonColor="blue">My Example Doc</Button>
        </a> */}
        <a onClick={test} target='_blank'>
            <Button buttonSize="btn--wide" buttonColor="blue">My Example Doc</Button>
        </a>
</div>
  );
};

export default config;
