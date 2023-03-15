// const date = new Date()
export default () => ({
  messageOpen: false,
  listUser: [
    {
      UserID: 1,
      Username: 'Valen'
    },
    {
      UserID: 2,
      Username: 'Mary Hilda'
    },
    {
      UserID: 3,
      Username: 'Obaidullah Amarkhil'
    },
    {
      UserID: 4,
      Username: 'Cameron Phillips'
    },
    {
      UserID: 5,
      Username: 'Hellen'
    }
  ],
  listChat: [
    {
      GroupID: 1,
      GroupName: '109220-Naturalization',
      LastModified: '2021-01-01 19:31',
      Username: 'Cameron Phillips',
      Message: 'Please check this out!'
    },
    {
      GroupID: 2,
      GroupName: 'Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]',
      LastModified: '2021-02-06 10:45',
      Username: 'Ellen',
      Message: 'Hey, please read.'
    },
    {
      GroupID: 3,
      GroupName: '8405-Diana SALAZAR MUNGUIA',
      LastModified: '01/06/2021 12:19',
      Username: 'Cameron Phillips',
      Message: 'I understand your initial concerns and thats very valid, Elizabeth. But you ...'
    }
  ],
  listMessage: [
    {
      Date: '2023-03-13 19:32',
      GroupID: 1,
      Data: [
        {
          id: 1,
          Username: 'Saya',
          Message: 'No worries. it will be completed asap ',
          Time: '2023-03-13 19:32',
          Read: true,
          BgChat: 'bg-purple-100'
        }
      ]
    },
    {
      Date: '2023-03-14 19:32',
      GroupID: 1,
      Data: [
        {
          id: 2,
          Username: 'Mary Hilda',
          Message: 'Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks. ',
          Time: '2023-03-14 19:32',
          Read: true,
          BgChat: 'bg-orange-100'
        },
        {
          id: 3,
          Username: 'Saya',
          Message: 'Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.',
          Time: '2023-03-14 19:32',
          Read: true,
          BgChat: 'bg-purple-100'
        },
        {
          id: 4,
          Username: 'Mary Hilda',
          Message: 'Sure thing, Claren',
          Time: '2023-03-14 19:32',
          Read: true,
          BgChat: 'bg-orange-100'
        },
        {
          id: 5,
          Username: 'Obaidullah Amarkhil',
          Message: 'Morning. I’ll try to do them. Thanks',
          Time: '2023-03-14 19:32',
          Read: true,
          BgChat: 'bg-green-100'
        }
      ]
    }
    // {
    //   Date: '2023-03-14 19:32',
    //   GroupID: 1,
    //   Data: [
    //     {
    //       Username: 'Obaidullah Amarkhil',
    //       Message: 'Morning. I’ll try to do them. Thanks',
    //       Time: '2023-03-14 19:32',
    //       Read: true,
    //       BgChat: 'bg-green-100'
    //     }
    //   ]
    // }
  ],
  detail: [],
  detailTitle: {}
})
