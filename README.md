Admin dashboard.
=======================================

react, typescript, tailwind, syncfusion, node js, express, astra database.

Main goal -> create admin dashboard with many features.

Features ->

1. Add tickets (stored to database).
2. Canban.
3. Calendar.
4. Graphics.

* * *
### [Demo](https://cold-world.github.io/admin-dashboard/)

![Alt Text](https://i.ibb.co/sHXvNkV/Screenshot-2023-03-28-214431.jpg)
![Alt Text](https://i.ibb.co/GVNhx4w/2.gif)

* * *



### A piece of code

```
export const TicketPage = ({ editMode }: TicketPageProps) => {
  const { currentColor, categories } = useStateContext();

  const [formData, setFormData] = useState<Ticket>({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString(),
    avatar: '',
    category: '',
    description: '',
    owner: '',
    priority: 0,
    title: '',
  });
  const navigate = useNavigate();
  let { id }: Readonly<Params<string>> = useParams();

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editMode) {
      const response = await axios.put(`http://localhost:8000/tickets/${id}`, {
        data: formData,
      });
      const success = response.status === 200;
      if (success) {
        navigate('/');
      }
    }
    if (!editMode) {
      const response = await axios.post('http://localhost:8000/tickets', {
        formData,
      });
      const success = response.status === 200;
      if (success) {
        navigate('/');
      }
      if (response.status !== 200) console.log(response.status);
    }
  };

  const fetchData = async () => {
    const response = await axios.get(`http://localhost:8000/tickets/${id}`);
    setFormData(response.data.data);
  };
  useEffect(() => {
    if (editMode) fetchData();
  }, []);
```

### Download & Installation

```shell 
https://github.com/cold-world/admin-dashboard.git
cd <project-dir>
npm install
npm start
```
