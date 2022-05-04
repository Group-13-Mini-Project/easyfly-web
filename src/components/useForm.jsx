import React ,{useState}from 'react'

export function useForm(initialFvalues){

    const [values,setValues] = useState(initialFvalues);

    const handleInputChange= e=>{
        const {name, value} = e.target
        setValues({
          ...values,
          [name]:value
        })
        }

  return {
      values,
      setValues,
      handleInputChange,
  }
}


// export default useForm

export function Form(props) {
    return (
      <form>
        {props.children}
      </form>
    )
  }


