<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

    <!-- Boxicons File -->
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Inter:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    
    <!-- Main CSS File -->
    <link href="../css/main.css" rel="stylesheet">

    <script src="../js/search.js" defer></script>
    <script src="../js/cookies.js" defer></script>
    <script src="../js/main.js" defer></script>

    <title>Hello, world!</title>

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="../img/favicon.png">

  </head>
  <body>

    <!-- Dark/Light mode -->
    <button  class="bx bx-sun dark-light-toggle" onclick="dark()"></button>
    
    <!-- Header -->
    <header>
        <div class="container">
            <div class="header-img"></div>

            <div class="search">
              <div class="search-wrapper">
                <div class="search-inputs">
                    <label for="search">Search Users</label>
                    <input type="search" class="form-control" name="search" id="search" data-search>
                </div>
                <div class="search-suggestions mt-3 hs-menu-inner" data-user-cards-container>
                    <template class="search-suggestion" data-user-cards-template>
                        <div class="card hide dropdown-item">
                            <div class="row no-gutters">
                                <div class="col-md-3 col-12">
                                    <img src="" alt="picture of image" class="card-img img-fluid p-3 border" data-image>
                                </div>
                                <div class="col-md-6 col-12">
                                    <div class="card-body">
                                        <h3 class="card-title" data-header></h3>
                                        <p class="card-text" data-body></p>
                                    </div>
                                </div>
                                <div class="col-md-3 col-12 d-flex align-items-center justify-content-end pr-md-3 pr-0"> <!-- Added responsive padding classes -->
                                    <p class="search-price" data-price></p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            </div>

        </div>
    </header>

   