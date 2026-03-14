import axios from 'axios';
import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import type { Post } from '../../types/Post';
import { toast } from 'react-toastify';

interface Props {
  initialData?: Post;
  onGravar: any;
  userId: string;
}

const FormInsertUpdate: React.FC<Props> = ({ initialData, onGravar, userId }) => {
  // Inicializa o estado com dados existentes (edição) ou campos vazios (inclusão)
  const [formData, setFormData] = useState<Post>({
    user_id: initialData?.user_id || '',
    category: initialData?.category || '',
    topic: initialData?.topic || '',
    description: initialData?.description || '',
    id: initialData?.id || ''
  });

  // Manipulador genérico para os inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    setFormData((prevState) => ({
      ...prevState,
      [name]: value 
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };     

  async function btnGravar() {
   
    if (!formData.category) {
      window.alert("Informe a categoria");
      return;
    }

    let Uri = `http://localhost:3000/posts/`;
    let response: Response;

    if (!formData.id || (formData.id === '')) {
        response = await axios.post(Uri, {
        user_id: userId,
        category: formData.category,
        topic: formData.topic,
        description: formData.description        
        });
    } else {
        response = await axios.put(Uri + formData.id, formData);
    }

    if ((response.status === 200) || (response.status === 201)) {
      formData.user_id = '';
      formData.category = '';
      formData.topic = '';
      formData.description = '';
      onGravar("Gravou");   
    }

  }

  return (
    <div style={{ maxWidth: '770px', margin: '0 auto', padding: '20px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="category">Categoria:</label>
        <select 
          name="category" 
          value={formData.category} 
          required
          onChange={handleChangeSelect}
          style={{ width: '100%', display: 'block' }}
        >
              <option value="Selecione..."></option>          
              <option value="Português">Português</option>
              <option value="Literatura">Literatura</option>                                
              <option value="Redação">Redação</option>     
              <option value="Matemática">Matemática</option>                                                           
              <option value="História">História</option>
              <option value="Geografia">Geografia</option>
              <option value="Química">Química</option>
              <option value="Física">Física</option>                                
              <option value="Biologia">Biologia</option>                                
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="topic">Tópico:</label>
          <input
            type="text"
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            style={{ width: '100%', display: 'block' }}
            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: '100%', display: 'block', minHeight: '100px' }}
            required
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }} onClick={() => btnGravar()}>
            Gravar
          </button>
          
          <button type="button"  style={{ backgroundColor: '#ccc', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
            Voltar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormInsertUpdate;