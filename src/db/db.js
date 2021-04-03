import {firestore} from '../firebase/firebase.utils'
import firebase from 'firebase/app'
import axios from 'axios'

//Date Formats for db save

const date = new Date()
const dateSave = {

    date : date.toDateString(),
    time : date.toLocaleTimeString()

}

//Updating an existing user course information 

export const updateUserEnrolled = async (uid, course, courseInfo) => {

    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get();

    if ( snapshot.exists ) {

        const enrolledCourse = { course : course, paid : false, dateRegistered : dateSave.date, courseInfo : courseInfo }
        
        const may = snapshot.data().course.offline.find( yup => yup.course === course )
       

        if (!may) {

            try{

                await userRef.update({
    
                    'course.offline' : firebase.firestore.FieldValue.arrayUnion(enrolledCourse)
                })
    
            } catch (error) {
                console.error (error.message)
            }
        }
    }

}

//Creating Course Data on registration

export const createUserCourseData =  async (userData, firstname, lastname, enrolled, courseInfo) => {

    const userRef = firestore.doc(`users/${userData.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
    
        const {email} = userData;
        const course = enrolled

        const RegSubmit = {
            email : email,
            firstname : firstname,
            subject : 'Successfull Course Registration',
            lastname : lastname,
            price : courseInfo.price,
            course : course
        }

        try {

            await userRef.set({
                firstname : firstname,
                lastname : lastname,
                email : email,
                createdOn : dateSave,
                course : { offline : [ { course : course, paid : false, dateRegistered : dateSave.date, courseInfo : courseInfo } ]}
            })
            
            .then(() => {
                axios.post('https://anncranberry-server.herokuapp.com/api/sendmail', RegSubmit);
            })
            
        } 
        
        catch (error) {
            console.log('error creating user', error.message)
        }
    }

}

//Deleting a course from db data

export const deleteCourseData = async ( uid, course ) => {

    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get();

    if ( snapshot.exists ) {
        
        const element = snapshot.data().course.offline.find( coursedata => coursedata.course === course.course )
       
        try{

            await userRef.update({

                'course.offline' : firebase.firestore.FieldValue.arrayRemove(element)
            })

        } catch (error) {
            console.error (error.message)
        }
    }

}

//Updating an existing user course information 

export const coursePaid = async (uid, course) => {

    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get();

    if ( snapshot.exists ) {
        
        const formerData = snapshot.data().course.offline.find((data) => data.course === course )
        const UpdateData = {...formerData, paid : true}

        console.log(formerData, UpdateData)

        try{

            await userRef.update({
                'course.offline' : firebase.firestore.FieldValue.arrayRemove(formerData) 
            })

            await userRef.update({
                'course.offline' : firebase.firestore.FieldValue.arrayUnion(UpdateData)   
            })

        } catch (error) {
            console.error (error.message)
        }
        
    }

}

//coursePaid("utERP8hlP8WGwLsCoQPiTiYV69p1", 'bridal')

//Create User

export const createUser =  async (userData, firstname, lastname) => {

    const userRef = firestore.doc(`users/${userData.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
    
        const {email} = userData;

        const RegSubmit = {
            email : email,
            firstname : firstname,
            subject : 'Welcome on board to ann cranberry',
            lastname : lastname,
            price : "nothing to add",
            course : "not resistered any yet"
        }

        try {

            await userRef.set({
                firstname : firstname,
                lastname : lastname,
                email : email,
                createdOn : dateSave,
                course : { offline : []}
            })
            
            .then(() => {
                axios.post('https://anncranberry-server.herokuapp.com/api/sendmail', RegSubmit);
            })
            
        } 
        
        catch (error) {
            console.log('error creating user', error.message)
        }
    }

}



           
