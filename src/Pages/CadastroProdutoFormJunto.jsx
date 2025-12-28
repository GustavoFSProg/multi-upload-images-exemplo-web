import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import api from "../api";

function CadastroProduto() {
  const [acceptedFiles, setAcceptedFiles] = useState([]);
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [price, setPrice] = useState("");

  const onDrop = useCallback((files) => {
    // Adiciona os novos arquivos à lista de arquivos aceitos
    setAcceptedFiles((prevFiles) => [...prevFiles, ...files]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Cria um objeto FormData para agrupar todos os dados do formulário
    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("descricao", descricao);
    formData.append("price", price);

    // Adiciona cada arquivo ao FormData
    acceptedFiles.forEach((file) => {
      formData.append("files", file); // 'files' é o nome do campo esperado pelo backend
    });

    try {
      // Envia os dados para o servidor (substitua pelo seu endpoint)
      const response = await api.post("/create-product", {
        body: formData,
      });

      if (response.ok) {
        alert("Upload realizado com sucesso!");
        // Limpar o formulário ou fazer outras ações pós-envio
        setNome("");
        setDescricao("");
        setAcceptedFiles([]);
      } else {
        alert("Falha no upload.");
      }
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="descricao">Descrição:</label>
        <input
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="price">Descrição:</label>
        <input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      {/* Área de Dropzone */}
      <div {...getRootProps({ className: "dropzone-area" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Solte os arquivos aqui...</p>
        ) : (
          <p>Arraste e solte alguns arquivos aqui, ou clique para selecionar</p>
        )}
      </div>

      <aside>
        <h4>Arquivos Selecionados</h4>
        <ul>{files}</ul>
      </aside>

      <button type="submit">Enviar Formulário</button>
    </form>
  );
}

export default CadastroProduto;
