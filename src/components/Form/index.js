function Form({ message, disabled, onChange, onSend }) {
  return (
    <form className={'w-full p-4'} onSubmit={onSend}>
      <div className={'w-full flex relative'}>
        <input type="text"
               value={message}
               disabled={disabled}
               onChange={onChange}
               className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 pr-11 block w-full border-gray-300 rounded-md text-sm leading-5 disabled:opacity-50 disabled:cursor-not-allowed"
               placeholder="Message" />
        <button className={'absolute w-11 h-9 right-0 top-px flex justify-center items-center text-blue-600 disabled:opacity-50 disabled:cursor-not-allowed'} onClick={onSend} disabled={disabled}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
          </svg>
        </button>
      </div>
    </form>
  );
}

export default Form;
