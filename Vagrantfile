Vagrant.configure("2") do |config|
  # Configuração para a VM1
  config.vm.define "vm1" do |vm1|
    vm1.vm.box = "ubuntu/focal64"
    vm1.vm.network "private_network", ip: "192.168.33.10"
    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
    end
    vm1.vm.provision "shell", inline: <<-SHELL
      apt-get update
      apt-get install -y curl wget
    SHELL
  end

  # Configuração para a VM2
  config.vm.define "vm2" do |vm2|
    vm2.vm.box = "ubuntu/focal64"
    vm2.vm.network "private_network", ip: "192.168.33.11"
    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = "2048" # Ajuste conforme necessário
    end
    vm2.vm.synced_folder ".", "/vagrant_data"
    vm2.vm.provision "shell", inline: <<-SHELL
      # Remover Node.js e npm antigos
      sudo apt-get remove -y nodejs npm

      # Atualizar pacotes do sistema
      sudo apt-get update
      sudo apt-get upgrade -y

      # Adicionar chave e repositório do MongoDB
      curl -fsSL https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
      echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

      # Atualizar lista de pacotes novamente para incluir o MongoDB
      sudo apt-get update
      sudo apt install -y mongodb-org

      # Garantir que o MongoDB inicie corretamente após a instalação
      sudo systemctl enable mongod.service
      sudo systemctl start mongod.service

      # Adicionar o repositório NodeSource para a versão 22.x
      curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
      apt-get install -y nodejs

      # Atualizar npm para a última versão
      npm install -g npm@latest

      # Instalar dependências do projeto e executar
      cd /vagrant_data
      npm install
      npm start
    SHELL
  end
end
