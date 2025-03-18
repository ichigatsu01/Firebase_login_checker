// おまけ…オブジェクト展開コード。何かに使えるかもしれな

import React from 'react'

function ObjectOpener({user}) {
  // 実装当時のコード…
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/* 実装当時のコード… */}
      {/* <Button onClick={() => setIsOpen(!isOpen)} variant="contained">
          {isOpen ? "authをたたむ" : "authを展開する"}
      </Button>
      </p>
      {isOpen && <ObjectOpener user={user} />} */}
        <ul className='object-opener'>
            {Object.entries(user).map(([key, value]) => (
                <li key={key}>
                    <strong>{key}</strong>:{" "}
                    {typeof value === "object" ? JSON.stringify(value, null,3) : value}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ObjectOpener
